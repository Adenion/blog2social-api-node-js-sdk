export class ShareService {
    http;
    constructor(http) {
        this.http = http;
    }
    async createPost(clientUserNetworkId, posts) {
        return this.http.post('/network/post/create', {
            client_user_network_id: clientUserNetworkId,
            b2s_posts: posts,
        });
    }
    async removePost(clientUserNetworkId, postId) {
        return this.http.post('/network/post/remove', {
            client_user_network_id: clientUserNetworkId,
            b2s_posts: [
                {
                    post_id: postId,
                },
            ],
        });
    }
}
//# sourceMappingURL=share.js.map