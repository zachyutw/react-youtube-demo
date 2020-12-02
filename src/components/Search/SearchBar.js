import PropTypes from 'prop-types';
import {
    FormControl,
    Input,
    InputAdornment,
    IconButton,
    InputLabel,
    makeStyles,
    colors
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { Search, Close } from '@material-ui/icons';
import clsx from 'clsx';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({palette:{
    primary:{
        main:'#FFF',
        contrastText:'#FFF'
    },
}})

const useStyles = makeStyles((theme) => ({
    root: {
        '& ..MuiInputBase-input':{
            color:'#FFF'
        },
        '& .MuiInput-underline:before':{
            borderColor: '#FFF'
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before':{
            borderColor: colors.deepOrange[100]
        },
        '& .MuiSvgIcon-root':{
            color:'#FFF'
        },
        '& .MuiFormLabel-root':{
            color:'#FFF'
        }
    },
    margin: {
        marginTop:theme.spacing(1),
        marginBottom:theme.spacing(2),
        // color:'#FFF'
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));

const SearchBar = ({
    onChange,
    placeholder,
    query = '',
    onClear,
    onSubmit,
}) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <form >
            <FormControl color='primary' className={clsx(classes.margin,classes.root)} fullWidth>
                <InputLabel color="primary" htmlFor='standard-adornment-password'>
                    {placeholder}
                </InputLabel>
                <Input
                    color="primary"
                    onChange={onChange}
                    value={query}
                    endAdornment={
                        <InputAdornment position='end'>
                            {query.length > 0 && (
                                <IconButton  onClick={onClear}>
                                    <Close />
                                </IconButton>
                            )}

                            <IconButton  onClick={onSubmit}>
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </form>
        </ThemeProvider>
    );
};

export default SearchBar;

SearchBar.propTypes = {
    onChange:PropTypes.func,
    placeholder:PropTypes.string,
    query:PropTypes.string,
    onClear:PropTypes.func,
    onSubmit:PropTypes.func
}