import React from 'react';
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux';
import {onClick_Cerrar_Sesion ,	SESION_CERRADA} from '../../redux/actions/LoginAction';

const LoginButton = (props) => {

	const cerrarSeccion = () => {
		props.onClick_Cerrar_Sesion(SESION_CERRADA);
		window.location.href = `/`;
	}

	return (
		<div>
				<Button variant="contened" color="default" className={props.color} onClick = {() => cerrarSeccion()}>
					Mi Cuenta
				</Button>		
		</div>
	);
};

const mapDispatchToProps = {
	onClick_Cerrar_Sesion
};

export default connect(null, mapDispatchToProps)(LoginButton);
