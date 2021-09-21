import React, { useState } from 'react';
import {
	makeStyles,
	InputAdornment,
	Button,
	TextField,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import autenticacion from '../../firebase/usuarios/autenticacion';

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

	const [correo, setCorreo] = useState('');
	const [contrasena, setContrasena] = useState('');
	const [contrasenaConf, setContrasenaConf] = useState('');
	const [nombres, setNombres] = useState('');
	const [usuario, setUsuario] = useState('');
	const [error, setError] = useState('');
	const [cargando, setCargando] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		setCargando('creando usuario')
		if (contrasena !== contrasenaConf) {
			return setError('Las contraseñas no coinciden');
		} else if (contrasena.length < 6) {
			return setError('La contraseña debe tener minimo 6 caracteres');
		}
		console.log(correo)
		const res = autenticacion.crearUsuario(correo , contrasena);
		if( res ){
			setCargando('Usuario creado');
			setCorreo('');
			setContrasena('');
			setContrasenaConf('');
			setNombres('');
			setUsuario('');
		} else {
			setCargando('');
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
			{cargando && (
				<Alert className={classes.alert} severity="info">
					{cargando}
				</Alert>
			)}
			<form onSubmit={handleSubmit}>
				<div className={classes.root}>
					<TextField
						className={classes.element}
						value={nombres}
						onChange={(event) => setNombres(event.target.value)}
						required
						name="nombres"
						id="nombres"
						label="Nombres"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircleIcon />
								</InputAdornment>
							),
						}}
					/>
					<TextField
						className={classes.element}
						value={usuario}
						onChange={(event) => setUsuario(event.target.value)}
						required
						name="usuario"
						id="usuario"
						label="Username"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircleIcon />
								</InputAdornment>
							),
						}}
					/>
					<TextField
						className={classes.element}
						value={correo}
						onChange={(event) => setCorreo(event.target.value)}
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
						value={contrasena}
						onChange={(event) => setContrasena(event.target.value)}
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
						value={contrasenaConf}
						onChange={(event) => setContrasenaConf(event.target.value)}
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

