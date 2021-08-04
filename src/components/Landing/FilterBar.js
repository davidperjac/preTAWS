import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, alpha, Button, Box } from '@material-ui/core';

//const Box = styled.div`${palette}`;

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,

    root:{
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#e0e0e0'
    }
}));

const FilterBar = () => {

    const classes = useStyles();

    return (
        <Box bgcolor="gray.400" className={classes.root}>
            <Button>popular</Button>
            <Button>Ultimo</Button>
            <Button>Lo Mejor</Button>
            {/*<AppBar position="static" color="default">
              <Toolbar className={classes.root}>
               
              </Toolbar>
            </AppBar>*/}
        </Box>
    );
}

export default FilterBar;
