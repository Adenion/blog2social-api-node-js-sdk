# Blog2Social API Node.js SDK

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-ready-red.svg)](https://www.npmjs.com/)

Official Node.js SDK for the Blog2Social API v1.0.

The SDK provides a typed, Promise-based interface for authentication, network connections, publishing, user apps, network properties, and video uploads.

## Installation

```bash
npm install @adenion/blog2social-api-node-js-sdk
```

## Requirements

- Node.js 18 or higher
- npm
- A Blog2Social `service_token`
- An `access_token` for user-specific endpoints

## Architecture

```text
┌──────────────────────────────┐
│    Your Node.js Application  │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│    Blog2Social Node.js SDK   │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       Blog2Social API        │
└──────────────┬───────────────┘
               │
   ┌───────────┼───────────┐
   ▼           ▼           ▼
Facebook   LinkedIn   Instagram
     ▼           ▼           ▼
  Threads   Pinterest   TikTok

... additional supported networks ...
```

## Initialization

```js
import { Blog2SocialClient } from '@adenion/blog2social-api-node-js-sdk';

const client = new Blog2SocialClient({
  serviceToken: process.env.BLOG2SOCIAL_SERVICE_TOKEN,
  accessToken: process.env.BLOG2SOCIAL_ACCESS_TOKEN,
});
```

Do not commit API tokens. Use environment variables or a secrets manager in production.

## Authenticate a User

```js
const response = await client.authentication.authenticateUser();

console.log(response.access_token);
```

`authenticateUser()` automatically stores the returned access token on the client instance.

## List Users

This service-level endpoint requires only the `service_token`.

```js
const users = await client.user.listUsers();

console.log(users);
```

## List Available Networks

```js
const networks = await client.network.listNetwork();

console.log(networks);
```

## List Network Properties

Network properties describe supported content, limits, media formats, instant sharing, and video requirements.

```js
const properties = await client.network.listProperties();

console.log(properties);
```

For video publishing, inspect `video_support` and `video_upload_type` for the matching `network_id` and `network_type`.

A video token is generated only when `video_upload_type` is `1`:

- `0`: publish with a public video URL
- `1`: request a video token and upload the local file in chunks
- `2`: publish with a public video URL; no video token is generated

## Connect a Social Media Account

```js
const response = await client.connection.addNetwork(
  1,
  1,
  'en',
);

console.log(decodeURIComponent(response.auth_link));
```

Network type values:

```text
0 = Profile
1 = Page
2 = Group
```

Some networks may require a user app. Register the app credentials first with `client.userApps.add()` and follow the API documentation for the selected network.

## List Connected Accounts

```js
const connections = await client.user.listUserAuthentications();

console.log(connections);
```

The returned `client_user_network_id` identifies the connected destination used for publishing.

## Publish a Link Post

```js
const clientUserNetworkId = 123456;

const response = await client.share.createPost(clientUserNetworkId, [
  {
    client_user_network_id: clientUserNetworkId,
    title: 'My first API post',
    message: 'Hello from the Blog2Social Node.js SDK.',
    postFormat: 0,
    customUrl: 'https://example.com',
  },
]);

console.log(response);
```

Post formats:

```text
0 = Link
1 = Image
2 = Video
```

## Publish an Image Post

```js
const response = await client.share.createPost(clientUserNetworkId, [
  {
    client_user_network_id: clientUserNetworkId,
    title: 'Image Post',
    message: 'This is an image post.',
    postFormat: 1,
    mediaObjects: [
      {
        type: 'IMAGE',
        url: 'https://example.com/image.jpg',
      },
    ],
  },
]);
```

## Publish a Video by URL

Use this workflow when the matching network property has `video_upload_type` equal to `0` or `2`.

```js
const response = await client.share.createPost(clientUserNetworkId, [
  {
    client_user_network_id: clientUserNetworkId,
    title: 'Video Post',
    message: 'This is a video post.',
    postFormat: 2,
    mediaObjects: [
      {
        type: 'VIDEO',
        url: 'https://example.com/video.mp4',
      },
    ],
  },
]);
```

## Upload a Local Video

Use this workflow only when the matching network property has `video_upload_type = 1`.

1. Request a video token with `client.video.createVideoPost()`.
2. Upload the file in chunks with `client.videoUpload.uploadChunk()`.
3. Check the result with `client.videoStatus.check()`.

A complete implementation is available in `examples/uploadVideoAndPost.mjs`.

## User Apps

```js
const userApp = await client.userApps.add(
  6,
  'YOUR_APP_KEY',
  'YOUR_APP_SECRET',
  'My Pinterest App',
);

console.log(userApp);
```

Available methods:

```js
client.userApps.add();
client.userApps.list();
client.userApps.modify();
client.userApps.delete();
```

## Available Services

```js
client.authentication;
client.network;
client.connection;
client.categories;
client.user;
client.share;
client.video;
client.videoUpload;
client.videoStatus;
client.app;
client.userApps;
```

## Error Handling

API errors are thrown as `Blog2SocialApiError` and include the HTTP status and parsed response body.

```js
import {
  Blog2SocialApiError,
} from '@adenion/blog2social-api-node-js-sdk';

try {
  await client.network.listNetwork();
} catch (error) {
  if (error instanceof Blog2SocialApiError) {
    console.error(error.status);
    console.error(error.responseBody);
  }

  throw error;
}
```

## Examples

Ready-to-use examples are available in the `examples/` directory.

Copy the example configuration before running them:

```bash
cp examples/config.example.mjs examples/config.mjs
```

Then add your test tokens and IDs to `examples/config.mjs`.

Run an example:

```bash
node examples/listNetwork.mjs
```

## Development

Install dependencies:

```bash
npm install
```

Build the SDK:

```bash
npm run build
```

Inspect the npm package contents:

```bash
npm pack --dry-run
```

## License

MIT
