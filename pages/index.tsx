import styles from '../styles/Screen.module.css';

import { useState } from 'react';

// components
import Question from '../components/Question';
import Button from '../components/Button';

// models
import AnswerModel from '../model/answerModel';
import QuestionModel from '../model/questionModel';

const mockQuestion = new QuestionModel(1, 'Best collor ever?', [
  AnswerModel.isTheWrongOne('Purple'),
  AnswerModel.isTheWrongOne('Black'),
  AnswerModel.isTheWrongOne('Green'),
  AnswerModel.isTheRightOne('Blue')
]);

export default function Screen() {
  const [question, setQuestion] = useState(mockQuestion);

  function onChoose(index: number) {
    console.log(index);
    setQuestion(question.answerQuestion(index));
  }

  function timeIsOver() {
    if (!question.hasChosenRightAnswer) {
      setQuestion(question.answerQuestion(-1));
    }
  }

  return (
    <div className={styles.screen}>
      <Question
        value={question}
        onChoose={onChoose}
        timeIsOver={timeIsOver}
        timeToAnswer={3} />
      <Button text='Próxima Questão' />
    </div>
  )
}
