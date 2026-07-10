export class ConnectionService {
    http;
    constructor(http) {
        this.http = http;
    }
    async addNetwork(networkId, networkTypeId, language = 'en', serviceConditionsId) {
        const payload = {
            network_id: networkId,
            network_type_id: networkTypeId,
            language,
        };
        if (serviceConditionsId !== undefined) {
            payload.service_conditions_id = serviceConditionsId;
        }
        return this.http.post('/network/add', payload);
    }
    async updateNetwork(clientUserNetworkId, networkId, networkTypeId, language = 'en') {
        return this.http.post('/network/update', {
            client_user_network_id: clientUserNetworkId,
            network_id: networkId,
            network_type_id: networkTypeId,
            language,
        });
    }
}
//# sourceMappingURL=connection.js.map