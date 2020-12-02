/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setQuery,
    searchVideos,
    loadMoreVideos,
    setStart,
} from '../../redux/slices/videosSlice';

const useSearchControl = () => {
    const {
        params: { q },
        data: { nextPageToken },
    } = useSelector((state) => state.video);

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(searchVideos({ q }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const onSearchChange = useCallback((e) => {
        dispatch(setQuery(e.target.value));
    }, []);

    const onSearchClear = useCallback(() => {
        dispatch(setQuery(''));
        dispatch(setStart(0));
        dispatch(searchVideos({ q: '' }));
    }, []);

    const onSearchSubmit = useCallback(() => {
        dispatch(searchVideos({ q }));
    }, [q]);

    const onSearchNextPage = useCallback(() => {
        dispatch(searchVideos({ q, pageToken: nextPageToken }));
    }, [q, nextPageToken]);

    const onSetStart = useCallback((start) => ()=> {
        dispatch(setStart(start));
    },[]);

    const onLoadMore = useCallback(()=>{
        dispatch(loadMoreVideos({ q, pageToken: nextPageToken }));
    },[q,nextPageToken])
    return {
        q,
        onSearchChange,
        onSearchClear,
        onSearchSubmit,
        onSearchNextPage,
        onSetStart,
        onLoadMore
    };
};

export default useSearchControl;
