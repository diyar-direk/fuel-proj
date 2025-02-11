export class AuthHelper {
  static getAccesssToken() {
    try {
      const tokens = JSON.parse(localStorage.getItem("authTokens"));

      return tokens?.access;
    } catch (err) {
      return null;
    }
  }

  static getRefreshToken() {
    try {
      const tokens = JSON.parse(localStorage.getItem("authTokens"));

      return tokens?.refresh;
    } catch (err) {
      return null;
    }
  }
}
