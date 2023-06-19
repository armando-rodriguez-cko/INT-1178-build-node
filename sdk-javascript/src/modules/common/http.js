/**
 * Http class
 * @class
 * @constructor
 */
export default class Http {
  apiKey;
  baseUrl;

  /**
   * 
   * @param {object} config 
   * @param {string} config.apiKey
   * @param {string} config.baseUrl
   */
  constructor(config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl;
  }

  /**
   * 
   * @param {string} endpoint 
   * @param {object} options 
   * @returns {Promise<string>}
   */
  async request(endpoint, options) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      "api-key": this.apiKey,
    };
    const config = {
      ...options,
      headers,
    };

    const response = await fetch(url, config);
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  }
}