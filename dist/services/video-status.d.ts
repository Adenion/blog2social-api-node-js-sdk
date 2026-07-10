import type { HttpClient } from '../http.js';
export declare class VideoStatusService {
    private readonly http;
    constructor(http: HttpClient);
    check<T = unknown>(videoToken: string): Promise<T>;
}
//# sourceMappingURL=video-status.d.ts.map