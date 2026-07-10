import type { HttpClient } from '../http.js';
import type { GraphRange, InsightRequestItem } from '../types/index.js';

export class InsightsService {
  public constructor(private readonly http: HttpClient) {}

  public async total<T = unknown>(networkPostData: InsightRequestItem[]): Promise<T> {
    return this.http.post<T>('/network/post/insights/total', {
      network_post_data: networkPostData,
    });
  }

  public async graph<T = unknown>(
    networkPostData: InsightRequestItem[],
    range?: GraphRange,
    fields?: string[]
  ): Promise<T> {
    return this.http.post<T>('/network/post/insights/graph', {
      network_post_data: networkPostData,
      ...(range ? { range } : {}),
      ...(fields ? { fields } : {}),
    });
  }

  public async enable<T = unknown>(networkPostData: InsightRequestItem[]): Promise<T> {
    return this.http.post<T>('/network/post/insights/status/enable', {
      network_post_data: networkPostData,
    });
  }

  public async disable<T = unknown>(networkPostData: InsightRequestItem[]): Promise<T> {
    return this.http.post<T>('/network/post/insights/status/disable', {
      network_post_data: networkPostData,
    });
  }
}
