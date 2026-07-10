import type { HttpClient } from "../http.js";
import type { PostObject } from "../types/index.js";

export class VideoService {
  public constructor(private readonly http: HttpClient) {}

  public async createVideoPost<T = unknown>(
    clientUserNetworkId: number,
    posts: PostObject[],
  ): Promise<T> {
    return this.http.post<T>("/network/post/create/", {
      client_user_network_id: clientUserNetworkId,
      b2s_posts: posts,
    });
  }
}
