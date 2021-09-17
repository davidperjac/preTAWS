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
import { useAuth } from '../../contexts/AuthContext';
import {onClick_Iniciar_Sesion,	onClick_Cerrar_Sesion} from '../../redux/actions/LoginAction'

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

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { login } = useAuth();
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
		try {
			setError('');
			setLoading(true);
			await login(email.trim(), password);
		} catch {
			setError('Hubo un error al iniciar sesion');
		}
		setLoading(false);
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
						value={email}
						name="correo"
						onChange={(event) => setEmail(event.target.value.trim())}
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
						value={password}
						type="password"
						name="contrasena"
						onChange={(event) => setPassword(event.target.value)}
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
	onClick_Iniciar_Sesion,
	onClick_Cerrar_Sesion,
};

export default connect(null,mapDispatchToProps)(FormLogin);