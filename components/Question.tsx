import styles from '../styles/Question.module.css';

// components
import Asking from './Asking';

// models
import QuestionModel from '../model/questionModel';

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  const element = props.value;

  return (
    <div className={styles.question}>
      <Asking text={element.question} />
    </div>
  );
}