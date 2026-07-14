import type { Blog2SocialClientOptions } from './types/index.js';
import { AuthenticationService } from './services/authentication.js';
import { NetworkService } from './services/network.js';
import { ConnectionService } from './services/connection.js';
import { CategoriesService } from './services/categories.js';
import { UserService } from './services/user.js';
import { ShareService } from './services/share.js';
import { VideoService } from './services/video.js';
import { VideoUploadService } from './services/video-upload.js';
import { VideoStatusService } from './services/video-status.js';
import { AppService } from './services/app.js';
export declare class Blog2SocialClient {
    private readonly http;
    readonly authentication: AuthenticationService;
    readonly network: NetworkService;
    readonly connection: ConnectionService;
    readonly categories: CategoriesService;
    readonly user: UserService;
    readonly share: ShareService;
    readonly video: VideoService;
    readonly videoUpload: VideoUploadService;
    readonly videoStatus: VideoStatusService;
    readonly app: AppService;
    readonly userApps: AppService;
    constructor(options: Blog2SocialClientOptions);
    setAccessToken(accessToken: string): void;
    clearAccessToken(): void;
    getServiceToken(): string;
    getAccessToken(): string | undefined;
}
//# sourceMappingURL=client.d.ts.map