import React, { useState } from 'react';
//import Typography from '@material-ui/core/Typography';
import {
	makeStyles,
	InputAdornment,
	Button,
	TextField,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import {
	onClick_Iniciar_Sesion,
	onClick_Cerrar_Sesion,
	SESION_INICIADA,
	SESION_CERRADA,
} from '../../redux/actions/LoginAction';

const DBURL = 'http://localhost:3001/usuarios';

const cookies = new Cookies();

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
}));

const stateInitial = {
	correo: '',
	usuario: '',
	contrasena: '',
	confirmar_contrasena: ''
};

const FormLogin = (props) => {
	const [form, setForm] = useState(stateInitial);
	const classes = useStyles();

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const iniciarSesion = async () => {
		await axios
			.get(DBURL, {
				params: { correo: form.correo, contrasena: md5(form.contrasena) },
			})
			.then((res) => {
				//console.log(res.data);
				return res.data;
			})
			.then((res) => {
				if (res.length > 0) {
					props.onClick_Iniciar_Sesion(SESION_INICIADA);
					props.onClick_Cerrar_Sesion(SESION_CERRADA);
					let respuesta = res[0];
					cookies.set('id', respuesta.id, { path: '/' });
					cookies.set('usuario', respuesta.usuario, { path: '/' });
					cookies.set('nombres', respuesta.nombres, { path: '/' });
					cookies.set('correo', respuesta.correo, { path: '/' });
					window.location.href = `/${respuesta.usuario}`;
				} else {
					setForm(stateInitial);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<form>
				<div className={classes.root}>
					<TextField
						className={classes.element}
						value={form.correo}
						name="correo"
						onChange={handleChange}
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
						value={form.usuario}
						name="username"
						onChange={handleChange}
						id="username"
						label="Username"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<AccountCircle />
								</InputAdornment>
							),
						}}
					/>
					<TextField
						className={classes.element}
						value={form.contrasena}
						type="password"
						name="contrasena"
						onChange={handleChange}
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
						value={form.confirmar_contrasena}
						type="password"
						name="confirmar_contrasena"
						onChange={handleChange}
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
					>
						Registrate
					</Button>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = {
	onClick_Iniciar_Sesion,
	onClick_Cerrar_Sesion,
};

export default connect(null, mapDispatchToProps)(FormLogin);
