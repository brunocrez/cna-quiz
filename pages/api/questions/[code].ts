import { questions } from '../../../questions';

export default (req, res) => {
  const { code } = req.query;

  const selectedQuestion = questions.filter(question => question.code === Number(code));

  if (selectedQuestion.length === 1) {    
    res.status(200).json(selectedQuestion[0].toLiteralObject());
  } else {
    res.status(204).send();
  }
}