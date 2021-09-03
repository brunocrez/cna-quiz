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

  toLiteralObject() {
    return {
      code: this.#code,
      question: this.#question,
      answers: this.#answers.map(answer => answer.toLiteralObject()),
      hasChosenRightAnswer: this.#hasChosenRightAnswer
    }
  }
}