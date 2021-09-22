import React from 'react';
import {
	Card,
	Typography,
	Button,
	makeStyles,
	Avatar,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import imageAccount from './account.png';
import { useEffect, useState } from 'react';
import controlador from '../../firebase/dataBase/CRUD';
import firebase from '@firebase/app-compat';

const UseStyles = makeStyles((theme) => ({
	btn_Style: {
		marginTop: '5rem',
		padding: '1rem',
		width: '70%',
		marginBottom: '2rem',
	},
	element: {
		marginTop: '1rem',
		marginBottom: '1rem',
		background: 'white',
		borderRadius: '15px',
		[`& fieldset`]: {
			borderRadius: 15,
		},
	},
	contenedor: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: '2rem',
		justifyContent: 'center',
		alignItems: 'center',
		width: '60%',
		backgroundColor: '#D7D7D7',
		height: '100%',
		marginLeft: '18rem',
		marginBottom: '5rem',
		borderRadius: '15px',
		fontSize: 21,
	},
	texts: {
		display: 'flex',
		width: '75%',
		flexDirection: 'column',
		marginTop: '2rem',
	},
	inputColor: {
		backgroundColor: 'white',
	},
	llena: {
		paddingBottom: '1rem',
		paddingTop: '2rem',
		textAlign: 'center',
	},
	subirbtn: {
		marginTop: '1.5rem',
	},
	foto: {
		width: '40%',
		height: '40%',
		marginLeft: '12rem',
	},
}));
const initialState = {
	nombre:'',
	usuario:'',
	correo: '',
	contrasena: ''
}
export const MiCuentaForm = () => {
	const classes = UseStyles();
	const [data, setData] = useState(initialState);
	//const [imagen, setImagen] = useState(imageAccount);
	console.log(data);

	useEffect(() => {
		controlador.cargarUsuario(setData);
	}, []);

	function handleUpload(e) {
		controlador.subirFoto(e);
	}

	return (
		<div>
			<Typography variant="" component="h1" className={classes.llena}>
				Consulta la informacion de tu cuenta
			</Typography>
			<form>
				<Card className={classes.contenedor}>
					<div className={classes.texts}>
						<input
							hidden
							className={classes.input}
							id="foto-perfil"
							type="file"
							onChange={handleUpload}
						/>
						<label htmlFor="foto-perfil">
							<Avatar
								alt="Remy Sharp"
								src={imageAccount}
								sx={{ width: 56, height: 56 }}
								className={classes.foto}
							/>
						</label>
						<Typography variant="" component="h2">
							Nombres
						</Typography>
						<Typography variant="" component="p">
							{data.nombre}
						</Typography>
						<Typography variant="" component="h2">
							Usuario
						</Typography>
						<Typography variant="" component="p">
							{data.usuario}
						</Typography>
						<Typography variant="" component="h2">
							Correo
						</Typography>
						<Typography variant="" component="p">
							{data.correo}
						</Typography>
						<Typography variant="" component="h2">
							Contraseña
						</Typography>
						<Typography variant="" component="p">
							{data.contrasena}
						</Typography>
					</div>
					<Button
						variant="contained"
						className={classes.btn_Style}
						color="primary"
						startIcon={<SaveIcon />}
						type="submit"
					>
						GUARDAR CAMBIOS
					</Button>
				</Card>
			</form>
		</div>
	);
};

export default MiCuentaForm;
