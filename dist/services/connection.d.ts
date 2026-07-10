import type { HttpClient } from '../http.js';
import type { ConnectionResponse } from '../types/index.js';
export declare class ConnectionService {
    private readonly http;
    constructor(http: HttpClient);
    addNetwork(networkId: number, networkTypeId: number, language?: string, serviceConditionsId?: number): Promise<ConnectionResponse>;
    updateNetwork(clientUserNetworkId: number, networkId: number, networkTypeId: number, language?: string): Promise<ConnectionResponse>;
}
//# sourceMappingURL=connection.d.ts.map