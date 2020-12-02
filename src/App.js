/* eslint-disable react-hooks/exhaustive-deps */
// import logo from './logo.svg';
import './App.css';
import 'hover.css/css/hover.css';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Container, Box } from '@material-ui/core';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import useSearchControl from './containers/Search/useSearchControl';
import YoutubeVideoCard from './components/Youtube/YoutubeVideoCard';
import SearchBar from './components/Search/SearchBar';

import Pagination from './components/Pagination/Pagination';

const VideosGrid = styled.div`
    display:grid;
    grid-template-columns: 33% 33% 33%;
    ${ props=>props.theme.breakpoints.down('sm')}{
        grid-template-columns: 50% 50%;
    }
    ${ props=>props.theme.breakpoints.down('xs')}{
        grid-template-columns: 100%;
    }
`

const Header = styled.header`
    background-color: #FF5556;
`

function App() {
    
    const {
        q,
        onSearchChange,
        onSearchClear,
        onSearchSubmit,
        onSetStart,
        onLoadMore,
    } = useSearchControl();

    const {
        data: { items },
        start,
    } = useSelector((state) => state.video);
    const videos = useMemo(() => items.slice(start, start + 10), [
        items,
        start,
    ]);

    const theme =useTheme();

    useEffect(()=>{
        if(start === items.length){
            onLoadMore();
        }
    },[start,items])

    const pages = useMemo( ()=>(items.length /10)+1,[items] );
    return (
        <Box className='App'>
            <Header>
                <Container>
                    <Box margin='0 auto' width='80%'>
                        <SearchBar
                            placeholder='熱門音樂'
                            query={q}
                            onChange={onSearchChange}
                            onClear={onSearchClear}
                            onSubmit={onSearchSubmit}
                        />
                    </Box>
                </Container>
            </Header>
            <main>
                <Container>
                    <VideosGrid theme={theme}>
                        {videos.map((data) => (
                            <Box key={data.etag} padding="14px">
                                <YoutubeVideoCard data={data} />
                            </Box>
                        ))}
                    </VideosGrid>
                    <Pagination onClick={onSetStart} start={start} pages={pages} />
                </Container>
            </main>
        </Box>
    );
}

export default App;
