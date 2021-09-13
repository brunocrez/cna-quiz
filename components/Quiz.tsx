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
    if (!props.question.hasAnswered) {
      props.onChoose(props.question.answerQuestion(index));
    }
  }

  return (
    <div className={styles.quiz}>
      { props.question ? 
        <Question
          timeToAnswer={15}
          value={props.question}
          onChoose={onChoose}
          timeIsOver={props.nextStep}
        /> : false
      }

      <Button onClick={props.nextStep} text={props.isTheLastOne ? 'Finalizar' : 'Próxima Questão'} />
    </div>
  );
}