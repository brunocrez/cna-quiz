import Question from '../components/Question';
import AnswerModel from '../model/answerModel';
import QuestionModel from '../model/questionModel';

export default function Home() {
  const testQuestion = new QuestionModel(1, 'Best collor ever?', [
    AnswerModel.isTheWrongOne('Purple'),
    AnswerModel.isTheWrongOne('Black'),
    AnswerModel.isTheWrongOne('Green'),
    AnswerModel.isTheRightOne('Blue'),
  ])
  return (
    <div>
      <Question value={testQuestion} />
    </div>
  )
}
