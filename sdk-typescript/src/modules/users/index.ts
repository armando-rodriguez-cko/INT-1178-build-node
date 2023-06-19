import Http from "../common/http";
import { User } from "./types";

const resourceName = "users";

export default class Users extends Http {
    async getAll(): Promise<User[]> {
        return await this.request(`/${resourceName}`);
    }
}