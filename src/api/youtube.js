import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/search',
});

const MAX = 30;
const defaultParams = {
    key: process.env.REACT_APP_YOUTUBE_API_KEY2,
    part: 'snippet',
    type: 'video',
    videoCategoryId: '10',
    maxResults: MAX,
};

export const searchYoutube = async (params) => {
    const resp = await instance.get('', {
        params: { ...defaultParams, ...params },
    });

    return resp;
};
