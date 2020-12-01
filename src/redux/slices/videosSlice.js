import { createSlice } from '@reduxjs/toolkit';
const NAME = 'videos';
const LOADING_STATE = ['pending', 'idle', 'error'];

const initialState = {
    videos: [],
    loading: false,
    error: {},
    selectedVideo: {},
    query:''
};

const slice = createSlice({
    name: NAME,
    initialState,
    reducers: {
        videoLoading(state) {
            state.loading = LOADING_STATE[0];
        },
        receivedVideos(state, action) {
            state.loading = LOADING_STATE[1];
            state.videos = action.payload;
        },
        setQuery(state,action){
            state.query = action.payload;
        }
    },
});


export const {videoLoading,receivedVideos,setQuery} = slice.actions;

export const searchVideos = (query)=> async dispatch => {
    dispatch(setQuery(query));
    dispatch(videoLoading);
    const resp = await new Promise( (resolve)=>{
        setTimeout( ()=>{
            resolve({data:['Success','I','am','go']});

        },300 );
    } );
    dispatch(receivedVideos(resp.data))
}

export default slice.reducer;