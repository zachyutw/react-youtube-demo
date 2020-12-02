import { IconButton } from '@material-ui/core';

const RoundNumberButton = ({ children, onClick, actived = false }) => {
    return (
        <IconButton
            size='small'
            onClick={onClick}
            style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: actived ? '#FF5556' : '',
                color: actived ? '#FFF' : '',
            }}>
            {children}
        </IconButton>
    );
};

export default RoundNumberButton;
