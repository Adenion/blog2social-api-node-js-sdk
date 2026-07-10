export class CategoriesService {
    http;
    constructor(http) {
        this.http = http;
    }
    async listCategories(clientUserNetworkId) {
        return this.http.post('/network/categories', {
            client_user_network_id: clientUserNetworkId,
        });
    }
}
//# sourceMappingURL=categories.js.map