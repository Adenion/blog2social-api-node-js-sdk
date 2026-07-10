import type { HttpClient } from '../http.js';
import type { AuthResponse } from '../types/index.js';
export declare class AuthenticationService {
    private readonly http;
    constructor(http: HttpClient);
    authenticateUser(): Promise<AuthResponse>;
}
//# sourceMappingURL=authentication.d.ts.map