import type { HttpClient } from "../http.js";
import type { NetworkItem, NetworkProperty } from "../types/index.js";

export class NetworkService {
  public constructor(private readonly http: HttpClient) {}

  public async listNetwork(): Promise<NetworkItem[]> {
    return this.http.post<NetworkItem[]>("/network/list");
  }

  public async listProperties(): Promise<NetworkProperty[]> {
    return this.http.post<NetworkProperty[]>("/network/properties");
  }
}
