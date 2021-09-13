import styles from '../styles/Screen.module.css';

import { useEffect, useState } from 'react';

// components
import Quiz from '../components/Quiz';

// models
import AnswerModel from '../model/answerModel';
import QuestionModel from '../model/questionModel';

const mockQuestion = new QuestionModel(1, 'Best collor ever?', [
  AnswerModel.isTheWrongOne('Purple'),
  AnswerModel.isTheWrongOne('Black'),
  AnswerModel.isTheWrongOne('Green'),
  AnswerModel.isTheRightOne('Blue')
]);

const BASE_URL = 'http://localhost:3000/api'

export default function Screen() {
  const [question, setQuestion] = useState(mockQuestion);
  const [questionCodes, setQuestionCodes] = useState<number[]>([]);

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

  }

  function nextStep() {

  }

  return (
    <div className={styles.screen}>
      <Quiz
        question={question}
        isTheLastOne={true}
        onChoose={onChoose}
        nextStep={nextStep}
      />
    </div>
  )
}
