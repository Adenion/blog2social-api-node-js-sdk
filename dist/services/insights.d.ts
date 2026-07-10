import type { HttpClient } from '../http.js';
import type { GraphRange, InsightRequestItem } from '../types/index.js';
export declare class InsightsService {
    private readonly http;
    constructor(http: HttpClient);
    total<T = unknown>(networkPostData: InsightRequestItem[]): Promise<T>;
    graph<T = unknown>(networkPostData: InsightRequestItem[], range?: GraphRange, fields?: string[]): Promise<T>;
    enable<T = unknown>(networkPostData: InsightRequestItem[]): Promise<T>;
    disable<T = unknown>(networkPostData: InsightRequestItem[]): Promise<T>;
}
//# sourceMappingURL=insights.d.ts.map