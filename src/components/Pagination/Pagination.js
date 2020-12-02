import {  useMemo } from 'react';
import clsx from 'clsx';
import { Box, makeStyles } from '@material-ui/core';
import RoundNumberButton from '../IconButton/RoundNumberButton';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:`${theme.spacing(5)}px 0`,
        '& button':{
            margin:theme.spacing(1)
        }
    },
}));

const Pagination = ({ onClick, start, pages }) => {
    const classes = useStyles();
    const items = useMemo(() => [...Array(pages).keys()], [pages]);
    console.log(start);
    console.log(typeof start);
    return (
        <Box className={clsx(classes.root)} >
            {items.map((value) => (
                <RoundNumberButton
                    key={value}
                    onClick={onClick(value*10)}
                    actived={start === value * 10}>
                    {value + 1}
                </RoundNumberButton>
            ))}
        </Box>
    );
};

export default Pagination;
