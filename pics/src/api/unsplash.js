import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID GYbqjWAiMd1QVBpeslHt7rOun563shjNYKVOHkOOQFU'
    }

});