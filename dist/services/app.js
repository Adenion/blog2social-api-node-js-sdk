export class AppService {
    http;
    constructor(http) {
        this.http = http;
    }
    async add(networkId, appKey, appSecret, appName) {
        return this.http.post('/app/add', {
            network_id: networkId,
            app_key: appKey,
            app_secret: appSecret,
            app_name: appName,
        });
    }
    async list() {
        return this.http.post('/app/list');
    }
    async modify(userAppId, appName, appKey, appSecret) {
        return this.http.post('/app/modify', {
            user_app_id: userAppId,
            app_name: appName,
            app_key: appKey,
            app_secret: appSecret,
        });
    }
    async delete(userAppId) {
        return this.http.post('/app/delete', {
            user_app_id: userAppId,
        });
    }
}
//# sourceMappingURL=app.js.map