import type { HttpClient } from '../http.js';
import type { UploadChunkInput } from '../types/index.js';

export class VideoUploadService {
  public constructor(private readonly http: HttpClient) {}

  public async uploadChunk<T = unknown>(input: UploadChunkInput): Promise<T> {
    const form = new FormData();

    form.append('video_token', input.videoToken);
    form.append('max_count_chunks', String(input.maxCountChunks));
    form.append('current_chunk', String(input.currentChunk));

    const chunk = input.chunk instanceof Blob ? input.chunk : new Blob([input.chunk as BlobPart]);

    form.append('chunk', chunk, input.filename ?? 'chunk');

    return this.http.postMultipart<T>(
      'https://api-upload.blog2social.com/api/rest/v1.0/video/upload/',
      form
    );
  }
}
