export default class AnswerModel {
  #value: string;
  #isCorrect: boolean;
  #hasShown: boolean;

  constructor(value: string, isCorrect: boolean, hasShown: boolean) {
    this.#value = value;
    this.#isCorrect = isCorrect;
    this.#hasShown = hasShown;
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
}