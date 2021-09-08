import styles from '../styles/QuestionAnswer.module.css';

// models
import AnswerModel from '../model/answerModel';

interface QuestionAnswerProps {
  value: AnswerModel;
  index: number;
  option: string;
  backgroundColorOption: string;
}

export default function QuestionAnswer(props: QuestionAnswerProps) {
  const answer = props.value;

  return (
    <div className={styles.answer}>
      <div className={styles.answerContent}>
        <div className={styles.frontContent}>
          <div className={styles.option} style={{ backgroundColor: props.backgroundColorOption }}>
            {props.option}
          </div>
          <div className={styles.value}>
            {answer.value}
          </div>
        </div>
        <div className={styles.backContent}>

        </div>
      </div>
    </div>
  );
}