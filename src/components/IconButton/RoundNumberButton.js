import PropTypes from 'prop-types';
import { IconButton, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

export const NAME = 'RoundNumberButton';
export const IDS = {
    name: NAME,
};

const useStyled = makeStyles({
    root: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
    },
});

const RoundNumberButton = ({ children, onClick,value, actived = false }) => {
    const classes = useStyled();
    const handleClick = ()=>onClick(value);
    return (
        <IconButton
            data-testid={IDS.name}
            data-actived={actived}
            className={clsx(classes.root)}
            size='small'
            onClick={handleClick}
            style={{
                backgroundColor: actived ? '#FF5556' : '',
                color: actived ? '#FFF' : '',
            }}>
            {children}
        </IconButton>
    );
};

RoundNumberButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    actived: PropTypes.bool,
};

export default RoundNumberButton;
