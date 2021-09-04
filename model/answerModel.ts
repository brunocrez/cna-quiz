export default class AnswerModel {
  #value: string;
  #isCorrect: boolean;
  #hasShown: boolean;

  constructor(value: string, isCorrect: boolean, hasShown = false) {
    this.#value = value;
    this.#isCorrect = isCorrect;
    this.#hasShown = hasShown;
  }

  static isTheRightOne(value: string) {
    return new AnswerModel(value, true);
  }

  static isTheWrongOne(value: string) {
    return new AnswerModel(value, false);
  }

  get value() {
    return this.#value;
  }

  get isCorrect() {
    return this.#isCorrect;
  }

  get hasShown() {
    return this.#hasShown;
  }

  showAnswer() {
    return new AnswerModel(this.#value, this.#isCorrect, true);
  }

  toLiteralObject() {
    return {
      value: this.#value,
      isCorrect: this.#isCorrect,
      hasShown: this.#hasShown
    }
  }
}