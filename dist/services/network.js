export class NetworkService {
    http;
    constructor(http) {
        this.http = http;
    }
    async listNetwork() {
        return this.http.post("/network/list");
    }
    async listProperties() {
        return this.http.post("/network/properties");
    }
}
//# sourceMappingURL=network.js.map