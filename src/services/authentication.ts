import type { HttpClient } from '../http.js';
import type { AuthResponse } from '../types/index.js';

export class AuthenticationService {
  public constructor(private readonly http: HttpClient) {}

  public async authenticateUser(): Promise<AuthResponse> {
    const response = await this.http.post<AuthResponse>('/user/auth', {}, { auth: true, accessToken: false });

    if (response.access_token) {
      this.http.setAccessToken(response.access_token);
    }

    return response;
  }
}
