export class VideoUploadService {
    http;
    constructor(http) {
        this.http = http;
    }
    async uploadChunk(input) {
        const form = new FormData();
        form.append('video_token', input.videoToken);
        form.append('max_count_chunks', String(input.maxCountChunks));
        form.append('current_chunk', String(input.currentChunk));
        const chunk = input.chunk instanceof Blob ? input.chunk : new Blob([input.chunk]);
        form.append('chunk', chunk, input.filename ?? 'chunk');
        return this.http.postMultipart('https://api-upload.blog2social.com/api/rest/v1.0/video/upload/', form);
    }
}
//# sourceMappingURL=video-upload.js.map