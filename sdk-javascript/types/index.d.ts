/**
 * @class
 * @constructor
 */
export default class Sdk {
    /**
     *
     * @param {object} config
     * @param {string} config.apiKey
     * @param {string} config.baseUrl
     * @param {Posts} posts
     * @param {Users} users
     */
    constructor(config: {
        apiKey: string;
        baseUrl: string;
    });
    posts: Posts;
    users: Users;
}
import Posts from './modules/posts/index.js';
import Users from './modules/users/index.js';
//# sourceMappingURL=index.d.ts.map