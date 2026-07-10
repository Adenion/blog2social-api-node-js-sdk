import type { HttpClient } from '../http.js';

export class AppService {
  public constructor(private readonly http: HttpClient) {}

  public async add<T = unknown>(networkId: number, appKey: string, appSecret: string, appName: string): Promise<T> {
    return this.http.post<T>('/app/add', {
      network_id: networkId,
      app_key: appKey,
      app_secret: appSecret,
      app_name: appName,
    });
  }

  public async list<T = unknown>(): Promise<T> {
    return this.http.post<T>('/app/list');
  }

  public async modify<T = unknown>(userAppId: number, appName: string, appKey: string, appSecret: string): Promise<T> {
    return this.http.post<T>('/app/modify', {
      user_app_id: userAppId,
      app_name: appName,
      app_key: appKey,
      app_secret: appSecret,
    });
  }

  public async delete<T = unknown>(userAppId: number): Promise<T> {
    return this.http.post<T>('/app/delete', {
      user_app_id: userAppId,
    });
  }
}
