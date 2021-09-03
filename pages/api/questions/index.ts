import { questions } from '../../../questions';

export default (req, res) => {
  const result = questions.map(question => question.toLiteralObject());
  res.status(200).json(result);
}