import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

export const NAME = 'BackDropCircleLoading';
export const IDS = {
    name:NAME
}

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function BackDropCircleLoading({ open }) {
    const classes = useStyles();

    return (
        <div data-open={open} data-testid={IDS.name}>
            <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color='inherit' />
            </Backdrop>
        </div>
    );
}
BackDropCircleLoading.propTypes={
    open:PropTypes.bool
}