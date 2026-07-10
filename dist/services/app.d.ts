import type { HttpClient } from '../http.js';
export declare class AppService {
    private readonly http;
    constructor(http: HttpClient);
    add<T = unknown>(networkId: number, appKey: string, appSecret: string, appName: string): Promise<T>;
    list<T = unknown>(): Promise<T>;
    modify<T = unknown>(userAppId: number, appName: string, appKey: string, appSecret: string): Promise<T>;
    delete<T = unknown>(userAppId: number): Promise<T>;
}
//# sourceMappingURL=app.d.ts.map