import YoutubeVideoCard, { NAME, IDS } from './YoutubeVideoCard';
import { render, cleanup } from '@testing-library/react';

export const mockVideoCard = {
    kind:'youtube#searchResult',
    etag:'E4UhgQ6dArqYTrk7zn7yknDWyqQ',
    id:{
        kind:'youtube#video',
        videoId:'eIib9hh2UCE'
    },
    snippet:{
        channelId:'UC7ovu6a8ydIbDy0fAKmoZ9A',
        channelTitle:'相信音樂BinMusic',
        description:'誰說2020沒有五月之約2020.5.31 pm 8:00 Mayday live in the sky 我們偶爾遲到但是一定會到5月的最後一天每個城市每個時區全球',
        liveBroadcastContent:'none',
        publishTime:'2020-05-31T13:15:10Z',
        publishedAt:'2020-05-31T13:15:10Z',
        thumbnails:{
            default:{height:90,url:'https://i.ytimg.com/vi/eIib9hh2UCE/default.jp',width:120},
            high:{height:360,width:480,url:"https://i.ytimg.com/vi/eIib9hh2UCE/hqdefault.jpg"},
            medium:{height:180,width:320,url:"https://i.ytimg.com/vi/eIib9hh2UCE/mqdefault.jpg"}
        },
        title:"五月天 [ 突然好想見到你 ] Mayday live in the sky 線上演唱會"
    }
}

describe(`${NAME} testing`, () => {
    afterEach(cleanup);

    test('render success', () => {
        const { getByTestId } = render(
            <YoutubeVideoCard data={mockVideoCard} />
        );
        const root = getByTestId(IDS.name);
        expect(root).toBeTruthy();
    });
});
