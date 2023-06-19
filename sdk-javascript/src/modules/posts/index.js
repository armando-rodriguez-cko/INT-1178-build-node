import Http from "../common/http.js"

const resourceName = "posts";

/**
 * Post class
 * @class
 */
export default class Posts extends Http {
  /**
   * 
   * @returns {Promise<string>}
   */
  async getAll() {
    return await this.request(`/${resourceName}`);
  }
}