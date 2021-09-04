import { questions } from '../../../questions';

export default (req, res) => {
  const { code } = req.query;

  const selectedQuestion = questions.filter(question => question.code === Number(code));

  if (selectedQuestion.length === 1) {
    const result = selectedQuestion[0].scrambleAnswers().toLiteralObject();
    res.status(200).json(result);
  } else {
    res.status(204).send();
  }
}