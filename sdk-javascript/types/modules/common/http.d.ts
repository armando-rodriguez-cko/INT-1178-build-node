/**
 * Http class
 * @class
 * @constructor
 */
export default class Http {
    /**
     *
     * @param {object} config
     * @param {string} config.apiKey
     * @param {string} config.baseUrl
     */
    constructor(config: {
        apiKey: string;
        baseUrl: string;
    });
    apiKey: string;
    baseUrl: string;
    /**
     *
     * @param {string} endpoint
     * @param {object} options
     * @returns {Promise<string>}
     */
    request(endpoint: string, options: object): Promise<string>;
}
//# sourceMappingURL=http.d.ts.map