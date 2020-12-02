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

                        <IconButton onClick={onSubmit}>
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};

export default SearchBar;