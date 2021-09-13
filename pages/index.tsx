import styles from '../styles/Screen.module.css';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// components
import Quiz from '../components/Quiz';

// models
import QuestionModel from '../model/questionModel';

const BASE_URL = 'http://localhost:3000/api'

export default function Screen() {
  const router = useRouter();  
  const [question, setQuestion] = useState(null);
  const [questionCodes, setQuestionCodes] = useState<number[]>([]);
  const [rightAnswers, setRightAnswers] = useState(0);

  async function loadQuestionCodes() {
    const response = await fetch(`${BASE_URL}/quiz`);
    const questionCodes = await response.json();
    setQuestionCodes(questionCodes);
  }

  async function loadQuestion(code: number) {
    const response = await fetch(`${BASE_URL}/questions/${code}`);
    const question = await response.json();
    setQuestion(QuestionModel.fromObject(question));
  }

  useEffect(() => {
    loadQuestionCodes();
  }, []);

  useEffect(() => {
    questionCodes.length > 0 && loadQuestion(questionCodes[0]);
  }, [questionCodes]);

  function onChoose(question: QuestionModel) {
    setQuestion(question);
    const hasChosenRightAnswer = question.hasChosenRightAnswer;
    setRightAnswers(rightAnswers + (hasChosenRightAnswer ? 1 : 0));
  }

  function getNextQuestionCode() {
    const nextIndex = questionCodes.indexOf(question.code) + 1;
    return questionCodes[nextIndex];
  }

  function nextStep() {
    const nextIndex = getNextQuestionCode();
    nextIndex ? goToNextQuestion(nextIndex) : completeQuiz();
  }

  function goToNextQuestion(index: number) {
    loadQuestion(index);
  }

  function completeQuiz() {
    router.push({
      pathname: '/result',
      query: {
        total: questionCodes.length,
        rightAnswers
      }
    });
  }

  return (
    <div className={styles.screen}>
      { question ? 
        <Quiz
          question={question}
          isTheLastOne={getNextQuestionCode() === undefined}
          onChoose={onChoose}
          nextStep={nextStep}
        /> : false
      }      
    </div>
  )
}
