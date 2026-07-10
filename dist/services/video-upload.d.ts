import type { HttpClient } from '../http.js';
import type { UploadChunkInput } from '../types/index.js';
export declare class VideoUploadService {
    private readonly http;
    constructor(http: HttpClient);
    uploadChunk<T = unknown>(input: UploadChunkInput): Promise<T>;
}
//# sourceMappingURL=video-upload.d.ts.map