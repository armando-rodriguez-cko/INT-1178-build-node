import { Config } from "../../config";

export default abstract class Http {
  private apiKey: string;
  private baseUrl: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl;
  }

  protected async request<T>(endpoint: string, options?: string[]): Promise<T> {
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