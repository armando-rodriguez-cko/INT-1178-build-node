import { Config } from "../../config.js";

/**
 * Http class
 * @class
 * @constructor
 */
export default abstract class Http {
  private apiKey: string;
  private baseUrl: string;

  /**
   * 
   * @param {object} config 
   * @param {string} config.apiKey
   * @param {string} config.baseUrl
   */
  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl;
  }

  /**
   * 
   * @param {string} endpoint 
   * @param {object} options 
   * @returns {Promise<string>}
   */
  protected async request<T>(endpoint: string, options?: object): Promise<T> {
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