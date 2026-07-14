import { HttpClient } from './http.js';
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

export class Blog2SocialClient {
  private readonly http: HttpClient;

  public readonly authentication: AuthenticationService;
  public readonly network: NetworkService;
  public readonly connection: ConnectionService;
  public readonly categories: CategoriesService;
  public readonly user: UserService;
  public readonly share: ShareService;
  public readonly video: VideoService;
  public readonly videoUpload: VideoUploadService;
  public readonly videoStatus: VideoStatusService;
  public readonly app: AppService;
  public readonly userApps: AppService;

  public constructor(options: Blog2SocialClientOptions) {
    this.http = new HttpClient(options);

    this.authentication = new AuthenticationService(this.http);
    this.network = new NetworkService(this.http);
    this.connection = new ConnectionService(this.http);
    this.categories = new CategoriesService(this.http);
    this.user = new UserService(this.http);
    this.share = new ShareService(this.http);
    this.video = new VideoService(this.http);
    this.videoUpload = new VideoUploadService(this.http);
    this.videoStatus = new VideoStatusService(this.http);
    this.app = new AppService(this.http);
    this.userApps = this.app;
  }

  public setAccessToken(accessToken: string): void {
    this.http.setAccessToken(accessToken);
  }

  public clearAccessToken(): void {
    this.http.clearAccessToken();
  }

  public getServiceToken(): string {
    return this.http.getServiceToken();
  }

  public getAccessToken(): string | undefined {
    return this.http.getAccessToken();
  }
}
