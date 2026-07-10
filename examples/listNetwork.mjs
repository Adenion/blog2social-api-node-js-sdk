import { Blog2SocialClient } from '@adenion/blog2social-api-node-sdk';
import config from './config.mjs';

const client = new Blog2SocialClient({
    serviceToken: config.serviceToken,
    accessToken: config.accessToken
});

try {
    const networks = await client.network.listNetwork();

    console.log(networks);
} catch (error) {
    console.error(error);
}