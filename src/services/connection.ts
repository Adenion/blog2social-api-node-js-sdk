import type { HttpClient } from '../http.js';
import type { ConnectionResponse, JsonObject } from '../types/index.js';

export class ConnectionService {
  public constructor(private readonly http: HttpClient) {}

  public async addNetwork(
    networkId: number,
    networkTypeId: number,
    language = 'en',
    serviceConditionsId?: number
  ): Promise<ConnectionResponse> {
    const payload: JsonObject = {
      network_id: networkId,
      network_type_id: networkTypeId,
      language,
    };

    if (serviceConditionsId !== undefined) {
      payload.service_conditions_id = serviceConditionsId;
    }

    return this.http.post<ConnectionResponse>('/network/add', payload);
  }

  public async updateNetwork(
    clientUserNetworkId: number,
    networkId: number,
    networkTypeId: number,
    language = 'en'
  ): Promise<ConnectionResponse> {
    return this.http.post<ConnectionResponse>('/network/update', {
      client_user_network_id: clientUserNetworkId,
      network_id: networkId,
      network_type_id: networkTypeId,
      language,
    });
  }
}
