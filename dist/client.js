import { HttpClient } from './http.js';
import { AuthenticationService } from './services/authentication.js';
import { NetworkService } from './services/network.js';
import { ConnectionService } from './services/connection.js';
import { CategoriesService } from './services/categories.js';
import { UserService } from './services/user.js';
import { ShareService } from './services/share.js';
import { InsightsService } from './services/insights.js';
import { VideoService } from './services/video.js';
import { VideoUploadService } from './services/video-upload.js';
import { VideoStatusService } from './services/video-status.js';
import { AppService } from './services/app.js';
export class Blog2SocialClient {
    http;
    authentication;
    network;
    connection;
    categories;
    user;
    share;
    insights;
    video;
    videoUpload;
    videoStatus;
    app;
    userApps;
    constructor(options) {
        this.http = new HttpClient(options);
        this.authentication = new AuthenticationService(this.http);
        this.network = new NetworkService(this.http);
        this.connection = new ConnectionService(this.http);
        this.categories = new CategoriesService(this.http);
        this.user = new UserService(this.http);
        this.share = new ShareService(this.http);
        this.insights = new InsightsService(this.http);
        this.video = new VideoService(this.http);
        this.videoUpload = new VideoUploadService(this.http);
        this.videoStatus = new VideoStatusService(this.http);
        this.app = new AppService(this.http);
        this.userApps = this.app;
    }
    setAccessToken(accessToken) {
        this.http.setAccessToken(accessToken);
    }
    clearAccessToken() {
        this.http.clearAccessToken();
    }
    getServiceToken() {
        return this.http.getServiceToken();
    }
    getAccessToken() {
        return this.http.getAccessToken();
    }
}
//# sourceMappingURL=client.js.map