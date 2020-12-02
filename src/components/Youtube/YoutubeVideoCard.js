import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
    img: { objectFit: 'cover', height: '300px', width: '100%' },
}));

const YoutubeVideoCard = ({ data }) => {
    const { thumbnails, title } = data.snippet || {};
    const { medium } = thumbnails || {};
    const { url } = medium;
    const classes = useStyles();
    return (
        <Box >
            <a href={`https://www.youtube.com/watch?v=${data.id.videoId}`}>
                <img src={url} className={clsx(classes.img)} alt='youtube-card' />
            </a>
           
            <p title={title}>{title}</p>
        </Box>
    );
};

export default YoutubeVideoCard;
