export class AuthenticationService {
    http;
    constructor(http) {
        this.http = http;
    }
    async authenticateUser() {
        const response = await this.http.post('/user/auth', {}, { auth: true, accessToken: false });
        if (response.access_token) {
            this.http.setAccessToken(response.access_token);
        }
        return response;
    }
}
//# sourceMappingURL=authentication.js.map