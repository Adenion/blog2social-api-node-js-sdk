import type { HttpClient } from '../http.js';
import type { UserAuthentication } from '../types/index.js';

export class UserService {
  public constructor(private readonly http: HttpClient) {}

  public async listUsers<T = unknown>(): Promise<T> {
    return this.http.post<T>('/user/list', {}, { auth: true, accessToken: false });
  }

  public async deleteUsers<T = unknown>(users: number[]): Promise<T> {
    return this.http.post<T>('/user/delete', { users }, { auth: true, accessToken: false });
  }

  public async deleteUser<T = unknown>(userId: number): Promise<T> {
    return this.deleteUsers<T>([userId]);
  }

  public async listUserAuthentications(): Promise<UserAuthentication[]> {
    return this.http.post<UserAuthentication[]>('/user/auth/list');
  }

  public async listAuth(): Promise<UserAuthentication[]> {
    return this.listUserAuthentications();
  }

  public async deleteUserAuthentication<T = unknown>(clientUserNetworkId: number): Promise<T> {
    return this.http.post<T>('/user/auth/delete', {
      client_user_network_id: clientUserNetworkId,
    });
  }

  public async deleteUserAuthentications<T = unknown>(clientUserNetworkIds: number[]): Promise<T[]> {
    const responses: T[] = [];

    for (const clientUserNetworkId of clientUserNetworkIds) {
      responses.push(await this.deleteUserAuthentication<T>(clientUserNetworkId));
    }

    return responses;
  }
}
