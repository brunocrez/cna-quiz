import styles from '../styles/Quiz.module.css';

// models
import QuestionModel from '../model/questionModel';

// components
import Question from './Question';
import Button from './Button';

interface QuizProps {
  question: QuestionModel;
  isTheLastOne: boolean;
  onChoose: (question: QuestionModel) => void;
  nextStep: () => void;
}

export default function Quiz(props: QuizProps) {

  function onChoose(index: number) {

  }

  return (
    <div className={styles.quiz}>
      <Question
        timeToAnswer={7}
        value={props.question}
        onChoose={onChoose}
        timeIsOver={props.nextStep}
      />

      <Button onClick={props.nextStep} text={props.isTheLastOne ? 'Finalizar' : 'Próxima Questão'} />
    </div>
  );
}