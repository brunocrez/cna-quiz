import styles from '../styles/Question.module.css';

// components
import QuestionTitle from './QuestionTitle';
import QuestionAnswer from './QuestionAnswer';

// models
import QuestionModel from '../model/questionModel';

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  const element = props.value;

  const renderAnswers = () => {
    return element.answers.map((answer, idx) => {
      return <QuestionAnswer key={idx} value={answer} index={idx} option="A" optionColor="#FC2A66" />
    });
  }

  return (
    <div className={styles.question}>
      <QuestionTitle text={element.question} />
      {renderAnswers()}
    </div>
  );
}