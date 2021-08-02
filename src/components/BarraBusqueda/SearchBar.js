import React from 'react';
import { colors, Icon , makeStyles} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles( (them) => ({
    root:{
        display: 'flex',
        alignItems: 'center'
    },
    elementSearchBar:{
        marginLeft: '0.5em'
    }
}));

const SearchBar = ({color}) => {

    const classes = useStyles();

    return(
        <div className={color} >
            <div className={classes.root}>
                <Icon aria-label="Search Icon" className={classes.elementSearchBar}>
                    <SearchIcon/>
                </Icon>
                <InputBase
                    placeholder="Buscar Paper"
                    inputProps={{'aria-label':'Buscar Paper...'}}
                />
            </div>
        </div>
    );
}

export default SearchBar;