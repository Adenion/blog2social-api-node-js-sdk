import { Blog2SocialApiError } from './errors.js';
export class HttpClient {
    baseUrl;
    serviceToken;
    accessToken;
    fetchImpl;
    constructor(options) {
        this.baseUrl = (options.baseUrl ?? 'https://api.blog2social.com/rest/v1.0').replace(/\/$/, '');
        this.serviceToken = options.serviceToken;
        this.accessToken = options.accessToken;
        this.fetchImpl = options.fetch ?? fetch;
    }
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    clearAccessToken() {
        this.accessToken = undefined;
    }
    getServiceToken() {
        return this.serviceToken;
    }
    getAccessToken() {
        return this.accessToken;
    }
    async post(path, body = {}, options = { auth: true, accessToken: true }) {
        const payload = { ...body };
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
        return this.parseResponse(response);
    }
    async postMultipart(path, formData) {
        const response = await this.fetchImpl(this.buildUrl(path), {
            method: 'POST',
            body: formData,
        });
        return this.parseResponse(response);
    }
    buildUrl(path) {
        if (path.startsWith('http://') || path.startsWith('https://')) {
            return path;
        }
        return `${this.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
    }
    async parseResponse(response) {
        const text = await response.text();
        let parsed = text;
        if (text.length > 0) {
            try {
                parsed = JSON.parse(text);
            }
            catch {
                parsed = text;
            }
        }
        if (!response.ok) {
            throw new Blog2SocialApiError(`Blog2Social API request failed with status ${response.status}.`, response.status, parsed);
        }
        return parsed;
    }
}
//# sourceMappingURL=http.js.map