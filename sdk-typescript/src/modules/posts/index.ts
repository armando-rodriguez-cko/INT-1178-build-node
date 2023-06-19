import Http from "../common/http";
import { Post } from "./types";

const resourceName = "posts";

export default class Posts extends Http {
    async getAll(): Promise<Post[]> {
        return await this.request(`/${resourceName}`);
    }
}