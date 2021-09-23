import React from 'react';
import {
	Card,
	Typography,
	Button,
	makeStyles,
	Avatar,
	TextField,
} from '@material-ui/core';
import { connect } from 'react-redux';
import SaveIcon from '@material-ui/icons/Save';
import imageAccount from './account.png';
import { useEffect, useState } from 'react';
import controlador from '../../firebase/dataBase/CRUD';

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
		justifyContent: 'center',
		alignItems: 'center',
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
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '30%',
		height: '30%',
		marginTop: '2rem',
		marginLeft: '18.5rem',
	},
}));

export const MiCuentaForm = ({ uid }) => {
	const classes = UseStyles();
	const [data, setData] = useState([]);
	const [imagen, setImagen] = useState(imageAccount);
	//const [nombre, setNombre] = useState('');
	//const [url, setUrl] = useState();

	useEffect(() => {
		console.log('test')
		console.log('uids', uid)
		controlador.cargarUsuario(uid, setData);
		//controlador.recuperarDoc('usuarios', 'id', setNombre);
		//controlador.bajarFoto(nombre, setUrl,'usuarios');
		//setImagen(url);
	}, []);

	useEffect(() => {
		if (data?.fotoPerfil) {
			controlador.bajarFoto(data.fotoPerfil, setImagen,'usuarios');
		}
	}, [data?.fotoPerfil]);

	useEffect(() => {
		console.log(data)
	}, [data]);

	const handleUpload = (e) => {
		controlador.subirFoto(e, 'usuarios');
	};

	return (
		<div>
			<Typography variant="" component="h1" className={classes.llena}>
				Consulta la informacion de tu cuenta
			</Typography>
			<form>
				<Card className={classes.contenedor}>
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
							src={imagen}
							sx={{ width: 56, height: 56 }}
							className={classes.foto}
						/>
					</label>
					<div className={classes.texts}>
						<div className={classes.texts}>
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

//connect with state
const mapStateToProps = (state) => {
	console.log(state.login_Reducer);
	return {
		uid: state.login_Reducer.uid,
	};
}

export default connect(mapStateToProps)(MiCuentaForm);

