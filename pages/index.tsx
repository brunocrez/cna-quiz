import styles from '../styles/Screen.module.css';

// components
import Question from '../components/Question';

// models
import AnswerModel from '../model/answerModel';
import QuestionModel from '../model/questionModel';

export default function Screen() {
  const testQuestion = new QuestionModel(1, 'Best collor ever?', [
    AnswerModel.isTheWrongOne('Purple'),
    AnswerModel.isTheWrongOne('Black'),
    AnswerModel.isTheWrongOne('Green'),
    AnswerModel.isTheRightOne('Blue'),
  ])
  return (
    <div className={styles.screen}>
      <Question value={testQuestion} />
    </div>
  )
}
