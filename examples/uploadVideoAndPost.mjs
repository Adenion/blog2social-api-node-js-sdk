import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { Blog2SocialClient } from '@adenion/blog2social-api-node-sdk';
import config from './config.mjs';

const client = new Blog2SocialClient({
  serviceToken: config.serviceToken,
  accessToken: config.accessToken,
});

const clientUserNetworkId = config.clientUserNetworkId;
const currentFile = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFile);
const videoPath = path.resolve(currentDirectory, config.videoFile);
const chunkSize = 4 * 1024 * 1024;

try {
  const properties = await client.network.listProperties();
  const connection = (await client.user.listUserAuthentications()).find(
    (item) => item.client_user_network_id === clientUserNetworkId,
  );

  if (!connection) {
    throw new Error('The configured clientUserNetworkId was not found.');
  }

  const property = properties.find(
    (item) =>
      item.network_id === connection.network_id &&
      item.network_type === Number(connection.type === 'page' ? 1 : connection.type === 'group' ? 2 : 0),
  );

  if (property?.video_upload_type !== 1) {
    throw new Error(
      `This upload workflow requires video_upload_type = 1. Received ${String(property?.video_upload_type)}.`,
    );
  }

  const tokenResponse = await client.video.createVideoPost(clientUserNetworkId, [
    {
      client_user_network_id: clientUserNetworkId,
      title: 'Blog2Social Node.js SDK Video Upload Test',
      message: 'This video was uploaded from a local file using the Blog2Social Node.js SDK.',
      postFormat: 2,
    },
  ]);

  const videoToken =
    tokenResponse?.video_token ??
    tokenResponse?.[0]?.video_token ??
    tokenResponse?.[0]?.extra?.video_token;

  if (!videoToken) {
    throw new Error('No video token was returned by the API.');
  }

  const videoBuffer = await fs.readFile(videoPath);
  const maxCountChunks = Math.ceil(videoBuffer.length / chunkSize);

  for (let index = 0; index < maxCountChunks; index += 1) {
    const start = index * chunkSize;
    const end = Math.min(start + chunkSize, videoBuffer.length);
    const chunk = videoBuffer.subarray(start, end);

    const response = await client.videoUpload.uploadChunk({
      videoToken,
      maxCountChunks,
      currentChunk: index + 1,
      chunk,
      filename: path.basename(videoPath),
    });

    console.log(`Uploaded chunk ${index + 1}/${maxCountChunks}`, response);
  }

  console.log('Video token:', videoToken);
  console.log('Run checkVideoStatus.mjs after processing has completed.');
} catch (error) {
  console.error(error);
}
