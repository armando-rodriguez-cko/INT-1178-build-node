import Http from "../common/http.js"

const resourceName = "users";

/**
 * Users class
 * @class
 */
export default class Users extends Http {
  /**
   * 
   * @returns {Promise<string>}
   */
  async getAll() {
    return await this.request(`/${resourceName}`);
  }
}