import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, alpha } from '@material-ui/core';
import lime from '@material-ui/core/colors/lime';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import {connect} from 'react-redux';
import { onClick_Iniciar_Sesion , onClick_Cerrar_Sesion , SESION_INICIADA , SESION_CERRADA} from '../../redux/actions/LoginAction';

const DBURL = 'http://localhost:3001/usuarios';

const cookies = new Cookies();

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

const stateInitial = {
    correo     : '',
    contrasena : '' 
}

const FormLogin = (props) => {

    const [form , setForm] = useState(stateInitial)
    const classes = useStyles();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const iniciarSesion = async () => {
        await axios.get(DBURL , {params:{correo : form.correo , contrasena : md5(form.contrasena)}})
        .then( res => {
            //console.log(res.data);
            return  res.data;
        })
        .then( res => {
            if(res.length > 0){
                props.onClick_Iniciar_Sesion(SESION_INICIADA);
                props.onClick_Cerrar_Sesion(SESION_CERRADA);
                let respuesta = res[0];
                cookies.set("id" , respuesta.id , {path: "/"});
                cookies.set("usuario" , respuesta.usuario , {path: "/"});
                cookies.set("nombres" , respuesta.nombres , {path: "/"});
                cookies.set("correo" , respuesta.correo , {path: "/"});
                window.location.href=`/${respuesta.usuario}`;
            } else {
                setForm(stateInitial);
            }
        })
        .catch(err => {
            console.log(err);
        }) 
    }

    return (
        <div>
            <form >
                <div className={classes.root}>
                    <TextField className={classes.element} value={form.correo} name="correo" onChange={handleChange} id="correo" label="correo" variant="outlined" />
                    <TextField className={classes.element} value={form.contrasena} name="contrasena" onChange={handleChange} id="contrasena" label="contraseña" variant="outlined" />
                    <Button variant="contained" className={classes.btn_Style} onClick={() => iniciarSesion()}>
                        Iniciar Secion
                    </Button>
                    <Button variant="contained" className={classes.btn_Style}>
                        Registrarce
                    </Button>
                </div>
            </form> 
        </div>
        
    );
}

const mapDispatchToProps = {
    onClick_Iniciar_Sesion,
    onClick_Cerrar_Sesion
}

export default connect(null , mapDispatchToProps)(FormLogin);