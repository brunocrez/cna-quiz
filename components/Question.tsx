import styles from '../styles/Question.module.css';

// components
import QuestionTitle from './QuestionTitle';

// models
import QuestionModel from '../model/questionModel';

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  const element = props.value;

  return (
    <div className={styles.question}>
      <QuestionTitle text={element.question} />
    </div>
  );
}