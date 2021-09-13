import styles from '../styles/QuestionAnswer.module.css';

// models
import AnswerModel from '../model/answerModel';

interface QuestionAnswerProps {
  value: AnswerModel;
  index: number;
  option: string;
  backgroundColorOption: string;
  onChoose: (index: number) => void;
}

export default function QuestionAnswer(props: QuestionAnswerProps) {
  const answer = props.value;
  const hasShown = answer.hasShown ? styles.hasShown : '';

  return (
    <div className={styles.answer} onClick={() => props.onChoose(props.index)}>
      <div className={`${hasShown} ${styles.answerContent}`}>
        <div className={styles.frontContent}>
          <div className={styles.option} style={{ backgroundColor: props.backgroundColorOption }}>
            {props.option}
          </div>
          <div className={styles.value}>
            {answer.value}
          </div>
        </div>
        <div className={styles.backContent}>
          { answer.isCorrect ?
            <>
              <div className={styles.correct}>
                <div>A resposta certa é ...</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
            </> :
            <>
              <div className={styles.wrong}>
                <div>A resposta informada está errada ...</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
            </>
          }
        </div>        
      </div>
    </div>
  );
}