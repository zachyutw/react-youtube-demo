import PropTypes from 'prop-types';
import { Box, makeStyles,Typography } from '@material-ui/core';
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
    root:{
        width:'100%',
        '& a':{
            width:'100%'
        }
    },
    img: { objectFit: 'cover', height: '300px', width: '100%' },
    text: {
        padding:theme.spacing(1)
    }
}));

const YoutubeVideoCard = ({ data }) => {
    const { thumbnails, title } = data.snippet || {};
    const { medium } = thumbnails || {};
    const { url } = medium;
    const classes = useStyles();
    return (
        <Box className={clsx('hvr-glow',classes.root)}>
            <a href={`https://www.youtube.com/watch?v=${data.id.videoId}`}>
                <img src={url} className={clsx(classes.img)} alt='youtube-card' />
            </a>
            <Typography className={clsx(classes.text)} variant="body1" title={title}>{title}</Typography>
        </Box>
    );
};

export default YoutubeVideoCard;

YoutubeVideoCard.propTypes ={
    data:PropTypes.object
}