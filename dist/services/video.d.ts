import type { HttpClient } from "../http.js";
import type { PostObject } from "../types/index.js";
export declare class VideoService {
    private readonly http;
    constructor(http: HttpClient);
    createVideoPost<T = unknown>(clientUserNetworkId: number, posts: PostObject[]): Promise<T>;
}
//# sourceMappingURL=video.d.ts.map