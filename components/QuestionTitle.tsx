import styles from '../styles/QuestionTitle.module.css';

interface AskingProps {
  text: string;
}

export default function QuestionTitle(props: AskingProps) {
  return (
    <div className={styles.questionTitle}>
      <span className={styles.text}>{props.text}</span>
    </div>
  );
}