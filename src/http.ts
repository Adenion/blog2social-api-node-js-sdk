import { Blog2SocialApiError } from './errors.js';
import type { Blog2SocialClientOptions, JsonObject } from './types/index.js';

export class HttpClient {
  private readonly baseUrl: string;
  private readonly serviceToken: string;
  private accessToken?: string;
  private readonly fetchImpl: typeof fetch;

  public constructor(options: Blog2SocialClientOptions) {
    this.baseUrl = (options.baseUrl ?? 'https://api.blog2social.com/rest/v1.0').replace(/\/$/, '');
    this.serviceToken = options.serviceToken;
    this.accessToken = options.accessToken;
    this.fetchImpl = options.fetch ?? fetch;
  }

  public setAccessToken(accessToken: string): void {
    this.accessToken = accessToken;
  }

  public clearAccessToken(): void {
    this.accessToken = undefined;
  }

  public getServiceToken(): string {
    return this.serviceToken;
  }

  public getAccessToken(): string | undefined {
    return this.accessToken;
  }

  public async post<T = unknown>(
    path: string,
    body: JsonObject = {},
    options: { auth?: boolean; accessToken?: boolean } = { auth: true, accessToken: true }
  ): Promise<T> {
    const payload: JsonObject = { ...body };

    if (options.auth !== false) {
      payload.service_token = this.serviceToken;
    }

    if (options.accessToken !== false) {
      if (!this.accessToken) {
        throw new Blog2SocialApiError('Missing access token for authenticated request.', 0, null);
      }

      payload.access_token = this.accessToken;
    }

    const response = await this.fetchImpl(this.buildUrl(path), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return this.parseResponse<T>(response);
  }

  public async postMultipart<T = unknown>(path: string, formData: FormData): Promise<T> {
    const response = await this.fetchImpl(this.buildUrl(path), {
      method: 'POST',
      body: formData,
    });

    return this.parseResponse<T>(response);
  }

  private buildUrl(path: string): string {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }

    return `${this.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }

  private async parseResponse<T>(response: Response): Promise<T> {
    const text = await response.text();
    let parsed: unknown = text;

    if (text.length > 0) {
      try {
        parsed = JSON.parse(text);
      } catch {
        parsed = text;
      }
    }

    if (!response.ok) {
      throw new Blog2SocialApiError(
        `Blog2Social API request failed with status ${response.status}.`,
        response.status,
        parsed
      );
    }

    return parsed as T;
  }
}
