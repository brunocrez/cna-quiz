import styles from '../styles/Question.module.css';

import QuestionModel from '../model/questionModel';

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  return (
    <div className={styles.question}>
      <h1>Question</h1>
    </div>
  );
}