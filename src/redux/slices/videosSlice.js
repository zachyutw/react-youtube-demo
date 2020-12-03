import { createSlice } from '@reduxjs/toolkit';
import { searchYoutube } from '../../api/youtube';
import thunkDispatcher from '../thunkDispatcher';
import localJSON from '../../utils/localJSON';
const NAME = 'videos';
export const LOADING_STATE = ['pending', 'idle', 'error'];

const IDS = {
    videoQ: 'videoQ',
    videosCache: 'videosCache',
    videoStart: 'videoStart',
};

const initialState = {
    start:
        +localStorage.getItem(IDS.videoStart) > 20
            ? 0
            : +localStorage.getItem(IDS.videoStart),
    data: localJSON.getItem(IDS.videosCache) || { items: [] },
    loading: null,
    error: {},
    params: {
        q: localStorage.getItem(IDS.videoQ) || '',
        pageToken: undefined,
    },
};

const slice = createSlice({
    name: NAME,
    initialState,
    reducers: {
        fetchLoading(state) {
            state.loading = LOADING_STATE[0];
        },
        receivedVideos(state, action) {
            state.data = action.payload;
            state.loading = LOADING_STATE[1];
            localJSON.setItem(IDS.videosCache, action.payload);
        },
        fetchFailure(state, action) {
            state.loading = LOADING_STATE[2];
            state.error = action.payload;
        },
        setQuery(state, action) {
            state.params.q = action.payload;
            localStorage.setItem(IDS.videoQ, action.payload);
        },
        setStart(state, action) {
            state.start = action.payload;
            localStorage.setItem(IDS.videoStart, action.payload);
        },
        concatVideosToItems(state, action) {
            state.data.items = state.data.items.concat(action.payload.items);
            state.data.nextPageToken = action.payload.nextPageToken;
            state.loading = LOADING_STATE[1];
        },
    },
});

export const {
    fetchLoading,
    receivedVideos,
    fetchFailure,
    concatVideosToItems,
    setQuery,
    setStart,
} = slice.actions;

export const searchVideos = (params) => (dispatch) => {
    thunkDispatcher({
        promise: searchYoutube(params),
        dispatch,
        success: receivedVideos,
        fetchLoading,
        fetchFailure,
    });
};

export const loadMoreVideos = (params) => (dispatch) => {
    thunkDispatcher({
        promise: searchYoutube(params),
        dispatch,
        success: receivedVideos,
        fetchLoading,
        fetchFailure,
    });
};

export default slice.reducer;
