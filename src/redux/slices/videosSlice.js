import { createSlice } from '@reduxjs/toolkit';
import { searchYoutube } from '../../api/youtube';
import thunkDispatcher from '../thunkDispatcher';

const NAME = 'videos';
const LOADING_STATE = ['pending', 'idle', 'error'];

const IDS = {
    videoQ:'videoQ'
}

const initialState = {
    start:0,
    data: { items: [] },
    loading: false,
    error: {},
    params:{
        q: localStorage.getItem(IDS.videoQ),
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
        },
        fetchFailure(state, action) {
            state.loading = LOADING_STATE[2];
            state.error = action.payload;
        },
        setQuery(state, action) {
            state.params.q = action.payload;
            localStorage.setItem(IDS.videoQ,action.payload);
        },
        setStart(state,action){
            state.start = action.payload;
        }
    },
});

export const {
    fetchLoading,
    receivedVideos,
    fetchFailure,
    setQuery,
    setStart,
} = slice.actions;

export const searchVideos = (params) => (dispatch) =>
    thunkDispatcher({
        promise: searchYoutube(params),
        dispatch,
        success: receivedVideos,
        fetchLoading,
        fetchFailure,
    });


export default slice.reducer;
