export class LocalStorageHelper {
  /**
   * @typedef keys
   * @type {'currentSection'}
   */

  /**
   * @param {keys} key
   */
  static setItem(key, value) {
    localStorage.setItem(key, value);
  }

  /**
   *
   * @param {keys} key
   */
  static getItem(key) {
    return localStorage.getItem(key);
  }

  /**
   * @param {keys} key
   */
  static safeParsedGetItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  }
  static removeItem() {}
}
