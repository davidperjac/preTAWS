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


    return (
        <Box bgcolor="gray.400" className={classes.root}>
            <Button onClick={() => setOpcActual("popular")}>popular</Button>
            <Button onClick={() => setOpcActual("ultimo")}>Ultimo</Button>
            <Button onClick={() => setOpcActual("lo mejor")}>Lo Mejor</Button>
            {/*<AppBar position="static" color="default">
              <Toolbar className={classes.root}>
               
              </Toolbar>
            </AppBar>*/}
        </Box>
    );
}

export default FilterBar;
