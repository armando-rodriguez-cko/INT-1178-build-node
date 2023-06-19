import Http from "../common/http.js";
import { Post } from "./types.js";

const resourceName = "posts";

/**
 * Post class
 * @class
 */
export default class Posts extends Http {
    async getAll(): Promise<Post[]> {
        return await this.request(`/${resourceName}`);
    }
}