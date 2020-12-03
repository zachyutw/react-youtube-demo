import { useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Box, makeStyles } from '@material-ui/core';
import RoundNumberButton from '../IconButton/RoundNumberButton';

export const NAME = 'Pagination';
export const IDS = {
    name: NAME,
};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: `${theme.spacing(5)}px 0`,
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        '& button': {
            margin: theme.spacing(1),
        },
    },
}));

const Pagination = ({ onClick, start, pages }) => {
    const classes = useStyles();
    console.log(pages)
    const items = useMemo(() => [...Array(pages).keys()], [pages]);
   
    return (
        <Box data-testid={IDS.name} className={clsx(classes.root)}>
            {items.map((value) => (
                <RoundNumberButton
                    key={value}
                    onClick={onClick}
                    value={value}
                    actived={start === value * 10}>
                    {value + 1}
                </RoundNumberButton>
            ))}
        </Box>
    );
};

Pagination.propTypes = {
    onClick: PropTypes.func,
    start: PropTypes.number,
    pages: PropTypes.number,
};

export default Pagination;
