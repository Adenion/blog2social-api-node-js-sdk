import { Blog2SocialClient } from '@adenion/blog2social-api-node-js-sdk';
import config from './config.mjs';

const client = new Blog2SocialClient({
    serviceToken: config.serviceToken,
    accessToken: config.accessToken
});

const clientUserNetworkId = config.clientUserNetworkId;

try {
    const response = await client.share.createPost(
        clientUserNetworkId,
        [
            {
                client_user_network_id: clientUserNetworkId,
                title: 'Blog2Social Node.js SDK Test',
                message: 'This post was published using the official Blog2Social Node.js SDK.',
                postFormat: 0,
                customUrl: 'https://www.blog2social.com'
            }
        ]
    );

    console.log(response);
} catch (error) {
    console.error(error);
}