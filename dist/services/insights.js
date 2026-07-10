export class InsightsService {
    http;
    constructor(http) {
        this.http = http;
    }
    async total(networkPostData) {
        return this.http.post('/network/post/insights/total', {
            network_post_data: networkPostData,
        });
    }
    async graph(networkPostData, range, fields) {
        return this.http.post('/network/post/insights/graph', {
            network_post_data: networkPostData,
            ...(range ? { range } : {}),
            ...(fields ? { fields } : {}),
        });
    }
    async enable(networkPostData) {
        return this.http.post('/network/post/insights/status/enable', {
            network_post_data: networkPostData,
        });
    }
    async disable(networkPostData) {
        return this.http.post('/network/post/insights/status/disable', {
            network_post_data: networkPostData,
        });
    }
}
//# sourceMappingURL=insights.js.map