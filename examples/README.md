# Examples

Copy the example configuration before running an example:

```bash
cp examples/config.example.mjs examples/config.mjs
```

Add your test credentials and IDs to `examples/config.mjs`. This file is ignored by Git.

Run an example from the repository root:

```bash
node examples/listNetwork.mjs
```

For `uploadVideoAndPost.mjs`, set `videoFile` in `config.mjs` to a local video file. The local upload workflow is only used when the matching network property has `video_upload_type = 1`.
