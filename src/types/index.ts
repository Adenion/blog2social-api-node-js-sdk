export type JsonObject = Record<string, unknown>;

export interface Blog2SocialClientOptions {
  serviceToken: string;
  accessToken?: string;
  baseUrl?: string;
  fetch?: typeof fetch;
}

export interface RequestOptions {
  auth?: boolean;
  accessToken?: boolean;
}

export interface AuthResponse {
  access_token: string;
  refresh_token?: string;
  expired_in?: number;
  [key: string]: unknown;
}

export interface NetworkItem {
  profile: number;
  page: number;
  group: number;
  network_id: number;
  url: string;
  name: string;
  [key: string]: unknown;
}


export interface NetworkProperty {
  network_id: number;
  network_type: number;
  instant_sharing?: number;
  character_limit?: number;
  html_support?: number;
  emoji_support?: number;
  video_support?: number;
  video_upload_type?: number;
  video_format?: string;
  video_max_length?: number;
  video_max_size?: number;
  [key: string]: unknown;
}

export interface ConnectionResponse {
  auth_link: string;
  session_token?: string;
  expired_in?: number;
  [key: string]: unknown;
}

export interface UserAuthentication {
  client_user_network_id: number;
  client_user_id?: number;
  network_id: number;
  type: string;
  type_id?: string | number;
  type_kind?: number;
  display_name?: string;
  instant_sharing?: number;
  expired_date?: string;
  last_user_update_date?: string;
  name?: string;
  user_app_id?: number;
  [key: string]: unknown;
}

export interface MediaObject {
  type: 'IMAGE' | 'VIDEO' | string;
  url: string;
  [key: string]: unknown;
}

export interface PostObject {
  client_user_network_id?: number;
  title?: string;
  message?: string;
  postFormat?: 0 | 1 | 2 | number;
  customUrl?: string;
  noCache?: number;
  tags?: string[];
  board?: string;
  mediaObjects?: MediaObject[];
  is_retweet?: number;
  network_post_id?: string;
  post_id?: number;
  make_threads?: number;
  ignore_link?: number;
  [key: string]: unknown;
}

export interface PublishResult {
  error: number;
  type?: number;
  client_user_network_id?: number;
  post_id?: number;
  b2s_error_code?: string;
  publish_url?: string;
  network_post_id?: string;
  extra?: JsonObject;
  [key: string]: unknown;
}

export interface UserAppData {
  user_app_id?: number;
  app_name?: string | number;
  app_url?: string;
  callback_url?: string;
  status?: number;
  [key: string]: unknown;
}

export interface UploadChunkInput {
  videoToken: string;
  maxCountChunks: number;
  currentChunk: number;
  chunk: Blob | Buffer | ArrayBuffer | Uint8Array;
  filename?: string;
}
