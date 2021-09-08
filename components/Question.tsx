import styles from '../styles/Question.module.css';

// components
import QuestionTitle from './QuestionTitle';
import QuestionAnswer from './QuestionAnswer';

// models
import QuestionModel from '../model/questionModel';

const options = [
  { value: 'A', color: '#F2C866' },
  { value: 'B', color: '#F266BA' },
  { value: 'C', color: '#85D4F2' },
  { value: 'D', color: '#BCE596' }
];

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  const element = props.value;

  const renderAnswers = () => {
    return element.answers.map((answer, idx) => {
      return (
        <QuestionAnswer
          key={idx}
          value={answer}
          index={idx}
          option={options[idx].value}
          backgroundColorOption={options[idx].color} />
        );
    });
  }

  return (
    <div className={styles.question}>
      <QuestionTitle text={element.question} />
      {renderAnswers()}
    </div>
  );
}