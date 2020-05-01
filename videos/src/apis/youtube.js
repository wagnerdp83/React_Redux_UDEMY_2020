import axios from 'axios';

const KEY = "AIzaSyAv1QtOiSvBaWpsTYSixTDVlczSe-aelkk";


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }

});
