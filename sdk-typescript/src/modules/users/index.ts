import Http from "../common/http.js";
import { User } from "./types.js";

const resourceName = "users";

/**
 * Users class
 * @class
 */
export default class Users extends Http {
    async getAll(): Promise<User[]> {
        return await this.request(`/${resourceName}`);
    }
}