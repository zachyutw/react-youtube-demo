/* eslint-disable react-hooks/exhaustive-deps */
// import logo from './logo.svg';
import { useEffect, useCallback, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { searchVideos } from './redux/slices/videosSlice';
import {
    FormControl,
    Input,
    InputAdornment,
    IconButton,
    InputLabel,
    makeStyles,
} from '@material-ui/core';
import { Search, Close } from '@material-ui/icons';
import clsx from 'clsx';

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

const SearchBar = ({ onChange, placeholder, query, onClear, onSubmit }) => {
    const classes = useStyles();
    return (
        <FormControl className={clsx(classes.margin)} fullWidth>
            <InputLabel htmlFor='standard-adornment-password'>
                {placeholder}
            </InputLabel>
            <Input
                onChange={onChange}
                value={query}
                endAdornment={
                    <InputAdornment position='end'>
                        {query.length > 0 && (
                            <IconButton onClick={onClear}>
                                <Close />
                            </IconButton>
                        )}

                        <IconButton>
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};

const useSearchControl = ()=>{
  const { query } = useSelector((state) => state.video);

    const dispatch = useDispatch();

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const onSearchChange = useCallback((e) => {
        dispatch(searchVideos(e.target.value));
    }, []);

    const onSearchClear = useCallback(()=>{
      dispatch(searchVideos(''));
    },[]);
    return {query, onSearchChange,onSearchClear};
}


function App() {
    const {query, onSearchChange,onSearchClear} = useSearchControl();
    return (
        <div className='App'>
            <header>
                <form>
                    <SearchBar
                        placeholder='熱門音樂'
                        query={query}
                        onChange={onSearchChange}
                        onClear={onSearchClear}
                    />
                </form>
            </header>
      
        </div>
    );
}

export default App;
