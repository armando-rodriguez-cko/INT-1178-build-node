import Posts from "./modules/posts/index";
import Users from "./modules/users/index";
import { Config } from "./types";

export default class Sdk {
  posts
  users

  constructor(config: Config) {
    this.posts = new Posts(config);
    this.users = new Users(config);
  }
};