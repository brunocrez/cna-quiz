import { questions } from '../../../questions';

export default (req, res) => {
  const { code } = req.query;

  const selectedQuestion = questions.filter(question => question.code === Number(code));

  if (selectedQuestion.length === 1) {
    const result = selectedQuestion[0].scrambleAnswers();
    res.status(200).json(result.toLiteralObject());
  } else {
    res.status(204).send();
  }
}