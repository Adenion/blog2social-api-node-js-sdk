import type { Blog2SocialClientOptions, JsonObject } from './types/index.js';
export declare class HttpClient {
    private readonly baseUrl;
    private readonly serviceToken;
    private accessToken?;
    private readonly fetchImpl;
    constructor(options: Blog2SocialClientOptions);
    setAccessToken(accessToken: string): void;
    clearAccessToken(): void;
    getServiceToken(): string;
    getAccessToken(): string | undefined;
    post<T = unknown>(path: string, body?: JsonObject, options?: {
        auth?: boolean;
        accessToken?: boolean;
    }): Promise<T>;
    postMultipart<T = unknown>(path: string, formData: FormData): Promise<T>;
    private buildUrl;
    private parseResponse;
}
//# sourceMappingURL=http.d.ts.map