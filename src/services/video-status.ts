import type { HttpClient } from '../http.js';

export class VideoStatusService {
  public constructor(private readonly http: HttpClient) {}

  public async check<T = unknown>(videoToken: string): Promise<T> {
    return this.http.post<T>(
      'https://api-upload.blog2social.com/api/rest/v1.0/video/check',
      {
        video_token: videoToken,
      },
      {
        auth: false,
        accessToken: false,
      }
    );
  }
}
