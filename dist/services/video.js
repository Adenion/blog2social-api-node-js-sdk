export class VideoService {
    http;
    constructor(http) {
        this.http = http;
    }
    async createVideoPost(clientUserNetworkId, posts) {
        return this.http.post("/network/post/create/", {
            client_user_network_id: clientUserNetworkId,
            b2s_posts: posts,
        });
    }
}
//# sourceMappingURL=video.js.map