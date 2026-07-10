import type { HttpClient } from '../http.js';
import type { PostObject, PublishResult } from '../types/index.js';
export declare class ShareService {
    private readonly http;
    constructor(http: HttpClient);
    createPost(clientUserNetworkId: number, posts: PostObject[]): Promise<PublishResult[]>;
    removePost<T = unknown>(clientUserNetworkId: number, postId: number): Promise<T>;
}
//# sourceMappingURL=share.d.ts.map