import { Blog2SocialClient } from '@adenion/blog2social-api-node-sdk';
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
                title: 'Blog2Social Node.js SDK Image Test',
                message: 'This image was published using the official Blog2Social Node.js SDK.',
                postFormat: 1,
                mediaObjects: [
                    {
                        type: 'IMAGE',
                        url: 'https://de.blog2social.com/wp-content/uploads/2024/04/hero-image-en.png'
                    }
                ]
            }
        ]
    );

    console.log(response);
} catch (error) {
    console.error(error);
}