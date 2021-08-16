import React from 'react';
import TextField from '@material-ui/core/TextField';
//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, alpha } from '@material-ui/core';
import lime from '@material-ui/core/colors/lime';


const useStyles = makeStyles( theme => ({
    root:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2rem'
        
    },
    btn_Style:{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: alpha(lime.A400, 0.7),
		'&:hover': {
			backgroundColor: alpha(lime.A400, 0.65),
		},
    },
    element:{
        marginTop: '1rem',
    }
}));

const FormLogin = () => {
    const classes = useStyles();

    return (
        <div>
            <form >
                <div className={classes.root}>
                    <TextField className={classes.element} id="correo" label="correo" variant="outlined" />
                    <TextField className={classes.element} id="contrasena" label="contraseña" variant="outlined" />
                    <Button variant="contained" className={classes.btn_Style} >
                        Iniciar Secion
                    </Button>
                    <Button variant="contained" className={classes.btn_Style} >
                        Registrarce
                    </Button>
                </div>
            </form> 
        </div>
        
    );
}

export default FormLogin;