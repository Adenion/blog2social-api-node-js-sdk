export class VideoStatusService {
    http;
    constructor(http) {
        this.http = http;
    }
    async check(videoToken) {
        return this.http.post('https://api-upload.blog2social.com/api/rest/v1.0/video/check', {
            video_token: videoToken,
        }, {
            auth: false,
            accessToken: false,
        });
    }
}
//# sourceMappingURL=video-status.js.map