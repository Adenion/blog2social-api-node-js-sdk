import type { HttpClient } from '../http.js';
import type { UserAuthentication } from '../types/index.js';
export declare class UserService {
    private readonly http;
    constructor(http: HttpClient);
    listUsers<T = unknown>(): Promise<T>;
    deleteUsers<T = unknown>(users: number[]): Promise<T>;
    deleteUser<T = unknown>(userId: number): Promise<T>;
    listUserAuthentications(): Promise<UserAuthentication[]>;
    listAuth(): Promise<UserAuthentication[]>;
    deleteUserAuthentication<T = unknown>(clientUserNetworkId: number): Promise<T>;
    deleteUserAuthentications<T = unknown>(clientUserNetworkIds: number[]): Promise<T[]>;
}
//# sourceMappingURL=user.d.ts.map