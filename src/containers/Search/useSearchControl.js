/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setQuery,
    searchVideos,
    setStart,
} from '../../redux/slices/videosSlice';

const useSearchControl = () => {
    const {
        params: { q },
        data: { nextPageToken },
    } = useSelector((state) => state.video);

    console.log(nextPageToken);
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
        dispatch(searchVideos({ q: '' }));
    }, []);

    const onSearchSubmit = useCallback(() => {
        dispatch(searchVideos({ q }));
    }, [q]);

    const onSearchNextPage = useCallback(() => {
        dispatch(searchVideos({ q, pageToken: nextPageToken }));
    }, [q, nextPageToken]);

    const onSetStart = useCallback((startEnd) => ()=> {
        console.log(startEnd);
        dispatch(setStart(startEnd));
    },[]);
    return {
        q,
        onSearchChange,
        onSearchClear,
        onSearchSubmit,
        onSearchNextPage,
        onSetStart,
    };
};

export default useSearchControl;
