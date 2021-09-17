import React, { useState } from 'react';
//import Typography from '@material-ui/core/Typography';
import {
	makeStyles,
	InputAdornment,
	Button,
	TextField,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { Alert } from '@material-ui/lab';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {onClick_Iniciar_Sesion,	onClick_Cerrar_Sesion , SESION_INICIADA } from '../../redux/actions/LoginAction'
import autenticacion from '../../fierebase/usuarios/autenticacion'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: '2rem',
	},
	btn_Style: {
		marginTop: '1rem',
		padding: '1rem',
		width: '100%',
	},
	element: {
		marginTop: '1rem',
	},
	alert: {
		marginTop: '2rem',
	},
}));
const FormLogin = (props) => {
	const classes = useStyles();

	const [correo, setCorreo] = useState('');
	const [contrasena, setContrasena] = useState('');

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		//validaciones con la contraseña, quitar
		/*
		if (password) {
			return setError('Las contraseñas no coinciden');
		}
		*/
		//

		const res = autenticacion.accederUsuario(correo , contrasena)
		
		if( res !== null ){
			window.location.href = `/${res}`;
			props.onClick_Iniciar_Sesion(SESION_INICIADA);
			setError('');
			setLoading(true);
		} else {
			setError('Error: credenciales no existen');
		}
	}

	return (
		<div>
			{error && (
				<Alert className={classes.alert} severity="error">
					{error}
				</Alert>
			)}
			<form onSubmit={handleSubmit}>
				<div className={classes.root}>
					<TextField
						className={classes.element}
						value={correo}
						name="correo"
						onChange={(event) => setCorreo(event.target.value.trim())}
						id="correo"
						label="Correo"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<EmailIcon />
								</InputAdornment>
							),
						}}
					/>
					<TextField
						className={classes.element}
						value={contrasena}
						type="password"
						name="contrasena"
						onChange={(event) => setContrasena(event.target.value)}
						id="contraseña"
						label="Password"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<LockIcon />
								</InputAdornment>
							),
						}}
					/>
					<Button
						variant="contained"
						className={classes.btn_Style}
						color="primary"
						disabled={loading}
						type="submit"
					>
						Iniciar Sesion
					</Button>
					<NavLink exact to="/register">
						<Button
							variant="contained"
							className={classes.btn_Style}
							color="primary"
						>
							Registrarse
						</Button>
					</NavLink>
				</div>
			</form>
		</div>
	);
}

const mapDispatchToProps = {
	onClick_Iniciar_Sesion
};

export default connect(null,mapDispatchToProps)(FormLogin);