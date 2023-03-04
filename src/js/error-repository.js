export default class ErrorRepository {
  #errors;

  constructor() {
    this.#errors = new Map([[1, 'Error 1'], [2, 'Error 2']]);
  }

  translate(code) {
    if (!this.#errors.has(code)) {
      return 'Unknown error';
    }
    return this.#errors.get(code);
  }
}
