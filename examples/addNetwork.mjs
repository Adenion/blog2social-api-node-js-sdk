import { Blog2SocialClient } from '@adenion/blog2social-api-node-js-sdk';
import config from './config.mjs';

const client = new Blog2SocialClient({
    serviceToken: config.serviceToken,
    accessToken: config.accessToken
});

const response = await client.connection.addNetwork(
    1, // Facebook
    1, // Page
    'en'
);

console.log(response);
console.log(decodeURIComponent(response.auth_link));