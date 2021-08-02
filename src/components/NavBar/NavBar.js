import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Login from '../Login/Login';
import SearchBar from '../BarraBusqueda/SearchBar';
import { makeStyles, alpha } from '@material-ui/core';
import lime from '@material-ui/core/colors/lime';
import FilterBar from '../BarraFiltro/FilterBar';


const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },

    contentSearch:{
        flexGrow: 0
    },
    colorElementNavBar:{
        backgroundColor: alpha(lime.A400, 0.70),
        '&:hover': {
          backgroundColor: alpha(lime.A400, 0.25),
        },
        borderRadius: '50px'
    },
    elementNavBar:{
        marginRight: '0.5em'
    }
} ));

const NavBar = () => {
    const classes = useStyles();

    return(
        <div>
            <AppBar position="fixed" color="White" >
              <Toolbar className={classes.root}>
                    <di className={classes.root}>
                        <Typography variant="h5" color="initial" className={classes.elementNavBar}>
                            Taws
                        </Typography>
                        <SearchBar color={classes.colorElementNavBar}/>
                    </di>
                  
                     <Login color={classes.colorElementNavBar}/>
              </Toolbar>
            </AppBar>
            
            <div className={classes.offset}></div>
            
        </div>
    );
}

export default NavBar;