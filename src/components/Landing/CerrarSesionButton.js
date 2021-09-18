import React from 'react';
import Button from '@material-ui/core/Button'
import InputIcon from '@material-ui/icons/Input';
import { connect } from 'react-redux';
import {onClick_Cerrar_Sesion ,	SESION_CERRADA} from '../../redux/actions/LoginAction';
//import {onClick_Salir ,SALIR} from '../../redux/actions/OpcionesUsuarioAction';
//import autenticacion from '../../fierebase/usuarios/autenticacion';



const CerrarSesionButton = (props) => {

	const cerrarSeccion = () => {
		//props.onClick_Salir(SALIR)
		props.onClick_Cerrar_Sesion(SESION_CERRADA);
        //props.onClick_CrearPaper('');
        //props.onClick_MiCuenta('');
		//window.location.href = `/`;
	}

	return (
		<div>
				<Button 
                startIcon={<InputIcon />} 
                variant="contened" 
                color="default" 
                className={props.color} 
                onClick = {() => cerrarSeccion()}
                >
				</Button>		
		</div>
	);

};

const mapDispatchToProps = {
	onClick_Cerrar_Sesion
    /*onClick_CrearPaper,
    onClick_MiCuenta*/
	//onClick_Salir
};


export default connect(null, mapDispatchToProps)(CerrarSesionButton);
