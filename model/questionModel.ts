import AnswerModel from './answerModel';

export default class QuestionModel {
  #ID: number;
  #question: string;
  #answers: AnswerModel[];
  #hasChosenRightAnswer: boolean;

  constructor(ID: number, question: string, answers: AnswerModel[], hasChosenRightAnswer = false) {
    this.#ID = ID;
    this.#question = question;
    this.#answers = answers;
    this.#hasChosenRightAnswer = hasChosenRightAnswer;
  }

  get ID() {
    return this.#ID;
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
      ID: this.#ID,
      question: this.#question,
      answers: this.#answers.map(answer => answer.toLiteralObject()),
      hasChosenRightAnswer: this.#hasChosenRightAnswer
    }
  }
}