import { scrumble } from '../functions/array';
import AnswerModel from './answerModel';

export default class QuestionModel {
  #code: number;
  #question: string;
  #answers: AnswerModel[];
  #hasChosenRightAnswer: boolean;

  constructor(code: number, question: string, answers: AnswerModel[], hasChosenRightAnswer = false) {
    this.#code = code;
    this.#question = question;
    this.#answers = answers;
    this.#hasChosenRightAnswer = hasChosenRightAnswer;
  }

  get code() {
    return this.#code;
  }

  get question() {
    return this.#question;
  }

  get answers() {
    return this.#answers;
  }

  get hasChosenRightAnswer() {
    return this.#hasChosenRightAnswer;
  }

  get hasAnswered() {
    for (let answer of this.#answers) {
      if (answer.hasShown) {
        return true;
      }
    }
    
    return false;
  }

  scrambleAnswers() {
    const scrumbledAnswers = scrumble(this.#answers);
    return new QuestionModel(this.#code, this.#question, scrumbledAnswers, this.#hasChosenRightAnswer);
  }

  answerQuestion(option: number): QuestionModel {    
    const isOptionRight = this.#answers[option]?.isCorrect;
    const newAnswers = this.answers.map((answer, idx) => {
      const selectedAnswer = option === idx;
      const shouldShow = selectedAnswer || answer.isCorrect;
      return shouldShow ? answer.showAnswer() : answer;
    });

    return new QuestionModel(this.#code, this.#question, newAnswers, isOptionRight);
  }

  static fromObject(obj: QuestionModel): QuestionModel {
    const answers = obj.answers.map(answer => AnswerModel.fromObject(answer));
    return new QuestionModel(obj.code, obj.question, answers, obj.hasChosenRightAnswer);
  }

  toLiteralObject() {
    return {
      code: this.#code,
      question: this.#question,
      hasChosenRightAnswer: this.#hasChosenRightAnswer,
      hasAnswered: this.hasAnswered,
      answers: this.#answers.map(answer => answer.toLiteralObject())
    }
  }
}