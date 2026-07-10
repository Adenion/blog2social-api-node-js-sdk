import type { HttpClient } from "../http.js";
import type { NetworkItem, NetworkProperty } from "../types/index.js";
export declare class NetworkService {
    private readonly http;
    constructor(http: HttpClient);
    listNetwork(): Promise<NetworkItem[]>;
    listProperties(): Promise<NetworkProperty[]>;
}
//# sourceMappingURL=network.d.ts.map