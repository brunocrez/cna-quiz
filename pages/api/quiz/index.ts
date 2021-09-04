import { scrumble } from '../../../functions/array';
import { questions } from '../../../questions';

export default (req, res) => {  
  const result = questions.map(question => question.code);
  res.status(200).json(scrumble(result));
}