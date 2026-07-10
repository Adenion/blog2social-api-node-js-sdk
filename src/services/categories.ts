import type { HttpClient } from '../http.js';

export class CategoriesService {
  public constructor(private readonly http: HttpClient) {}

  public async listCategories<T = unknown>(clientUserNetworkId: number): Promise<T> {
    return this.http.post<T>('/network/categories', {
      client_user_network_id: clientUserNetworkId,
    });
  }
}
