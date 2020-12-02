/* eslint-disable react-hooks/exhaustive-deps */
// import logo from './logo.svg';
import './App.css';
import { useMemo,useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Button, makeStyles, Container, Box,IconButton } from '@material-ui/core';

import useSearchControl from './containers/Search/useSearchControl';
import YoutubeVideoCard from './components/Youtube/YoutubeVideoCard';
import SearchBar from './components/Search/SearchBar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));

function App() {
    const {
        q,
        onSearchChange,
        onSearchClear,
        onSearchSubmit,
        onSearchNextPage,
        onSetStart,
    } = useSearchControl();

    const {
        data: { items },
        start,
    } = useSelector((state) => state.video);
    const videos = useMemo(() => items.slice(start, start + 10), [
        items,
        start,
    ]);
    
    const checkIsCurrentPage = useCallback((value)=>start===value*10,[start]);

    return (
        <Box className='App'>
            <header>
                <Container>
                  <Box margin="0 auto" width="80%">
                    <form >
                        <SearchBar
                            placeholder='熱門音樂'
                            query={q}
                            onChange={onSearchChange}
                            onClear={onSearchClear}
                            onSubmit={onSearchSubmit}
                        />
                    </form>
                    </Box>
                </Container>
            </header>
            <main>
                <Container>
                    <Box display='flex' flexWrap='wrap'>
                        {videos.map((data) => (
                            <Box key={data.etag} flex='1 46%' margin='10px 2%'>
                                <YoutubeVideoCard data={data} />
                            </Box>
                        ))}
                    </Box>
                    <Box padding='50px 0'>
                        {[0, 1, 2].map((value) => (
                            <IconButton
                                key={value}
                                size="small"
                                onClick={onSetStart(value * 10)}
                                style={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:checkIsCurrentPage(value) ? '#FF5556':'',color:checkIsCurrentPage(value)? "#FFF":'' }}
                                >
                                {value + 1}
                              
                            </IconButton>
                        ))}
                    </Box>
                </Container>
            </main>
        </Box>
    );
}

export default App;
