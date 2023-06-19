import Posts from "./modules/posts/index.js";
import Users from "./modules/users/index.js";
import { Config } from "./types.js";

/**
 * @class
 * @constructor
 */
export default class Sdk {
  posts
  users

  /**
   * 
   * @param {object} config
   * @param {string} config.apiKey
   * @param {string} config.baseUrl
   * @param {Posts} posts
   * @param {Users} users
   */
  constructor(config: Config) {
    this.posts = new Posts(config);
    this.users = new Users(config);
  }
};