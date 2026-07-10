export class UserService {
    http;
    constructor(http) {
        this.http = http;
    }
    async listUsers() {
        return this.http.post('/user/list', {}, { auth: true, accessToken: false });
    }
    async deleteUsers(users) {
        return this.http.post('/user/delete', { users }, { auth: true, accessToken: false });
    }
    async deleteUser(userId) {
        return this.deleteUsers([userId]);
    }
    async listUserAuthentications() {
        return this.http.post('/user/auth/list');
    }
    async listAuth() {
        return this.listUserAuthentications();
    }
    async deleteUserAuthentication(clientUserNetworkId) {
        return this.http.post('/user/auth/delete', {
            client_user_network_id: clientUserNetworkId,
        });
    }
    async deleteUserAuthentications(clientUserNetworkIds) {
        const responses = [];
        for (const clientUserNetworkId of clientUserNetworkIds) {
            responses.push(await this.deleteUserAuthentication(clientUserNetworkId));
        }
        return responses;
    }
}
//# sourceMappingURL=user.js.map