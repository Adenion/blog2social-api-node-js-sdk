import type { HttpClient } from '../http.js';
import type { PostObject, PublishResult } from '../types/index.js';

export class ShareService {
  public constructor(private readonly http: HttpClient) {}

  public async createPost(
    clientUserNetworkId: number,
    posts: PostObject[]
  ): Promise<PublishResult[]> {
    return this.http.post<PublishResult[]>('/network/post/create', {
      client_user_network_id: clientUserNetworkId,
      b2s_posts: posts,
    });
  }

  public async removePost<T = unknown>(clientUserNetworkId: number, postId: number): Promise<T> {
    return this.http.post<T>('/network/post/remove', {
      client_user_network_id: clientUserNetworkId,
      b2s_posts: [
        {
          post_id: postId,
        },
      ],
    });
  }
}
