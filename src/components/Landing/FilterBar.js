import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, alpha, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,

    root:{
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));

const FilterBar = () => {

    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" color="default">
              <Toolbar className={classes.root}>
                <Button>popular</Button>
                <Button>Ultimo</Button>
                <Button>Lo Mejor</Button>
              </Toolbar>
            </AppBar>
        </div>
    );
}

export default FilterBar;
