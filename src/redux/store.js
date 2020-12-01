import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import video from './slices/videosSlice';

const store = configureStore({
    reducer: {
        video,
    },
    middleware:getDefaultMiddleware().concat(reduxLogger),
});

export default store;
