import React, { useState } from 'react';
//import Typography from '@material-ui/core/Typography';
import {
	makeStyles,
	InputAdornment,
	Button,
	TextField,
} from '@material-ui/core';
//import AccountCircle from '@material-ui/icons/AccountCircle';
import { Alert } from '@material-ui/lab';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';

import { useAuth } from '../../contexts/AuthContext';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: '2rem',
	},
	btn_Style: {
		marginTop: '1rem',
		padding: '1rem',
	},
	element: {
		marginTop: '1rem',
	},
	alert: {
		marginTop: '2rem',
	},
}));
export default function FormRegister() {
	const classes = useStyles();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConf, setPasswordConf] = useState('');

	const { register } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		if (password !== passwordConf) {
			return setError('Las contraseñas no coinciden');
		} else if (password.length < 6) {
			return setError('La contraseña debe tener minimo 6 caracteres');
		}
		try {
			setError('');
			setLoading(true);
			await register(email, password);
		} catch {
			setError('Hubo un error al crear la cuenta');
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
						onChange={(event) => setEmail(event.target.value)}
						required
						name="correo"
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
						onChange={(event) => setPassword(event.target.value)}
						required
						type="password"
						name="contrasena"
						id="contraseña"
						label="Contraseña"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<LockIcon />
								</InputAdornment>
							),
						}}
					/>
					<TextField
						className={classes.element}
						value={passwordConf}
						onChange={(event) => setPasswordConf(event.target.value)}
						required
						type="password"
						name="confirmar_contrasena"
						id="confirmar_contraseña"
						label="Confirmar contraseña"
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
						Registrate
					</Button>
				</div>
			</form>
		</div>
	);
}
/*
const mapDispatchToProps = {
	onClick_Iniciar_Sesion,
	onClick_Cerrar_Sesion,
};
*/
//export default connect(null, mapDispatchToProps)(FormLogin);
