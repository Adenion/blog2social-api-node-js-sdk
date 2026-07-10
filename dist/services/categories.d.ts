import type { HttpClient } from '../http.js';
export declare class CategoriesService {
    private readonly http;
    constructor(http: HttpClient);
    listCategories<T = unknown>(clientUserNetworkId: number): Promise<T>;
}
//# sourceMappingURL=categories.d.ts.map