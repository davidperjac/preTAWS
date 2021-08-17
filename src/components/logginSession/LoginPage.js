import React from 'react';
import FormLogin from './FormLogin';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import Logo from '../Landing/logo.png';
import { Provider } from 'react-redux';
import store from '../../redux/store';


const useStyles = makeStyles( theme => ({
    root:{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    head:{
        display:'flex',
        justifyContent: 'space-between'
    }    
}));


const LoginPage = () => {

    const classes = useStyles();

    return (
        <Provider store={store}>
        <div style={{backgroundColor: '#F3F7EE'}}>
            <Container maxWidth="sm" className={classes.root}>
                <div >
                    <div className={classes.head}>
                        <div>
                            <Typography variant="" component="h2">Bienvenido de nuevo</Typography>
                            <Typography variant="" component="h1">Ingrese a su cuenta</Typography>
                        </div>
                        <img
                                    src={Logo}
                                    className="logo"
                                    alt="Logo"
                                    width="60"
                                    height="60"
                        />
                    </div>
                    
                    <FormLogin/>
                </div>
                
            </Container>
        </div>
        </Provider>
    );
}

export default LoginPage;