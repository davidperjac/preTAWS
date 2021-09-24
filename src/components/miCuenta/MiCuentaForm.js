import React from 'react';
import {
	Card,
	Typography,
	Button,
	makeStyles,
	Avatar,
	List,
	ListItem,
	Box,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { connect } from 'react-redux';
import SaveIcon from '@material-ui/icons/Save';
import imageAccount from './account.png';
import { useEffect, useState } from 'react';
import controlador from '../../firebase/dataBase/CRUD';
import CardPaper from '../Landing/CardPaper';
import { LinearProgress } from '@mui/material';

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
		width: '30%',
		height: '30%',
		marginTop: '2rem',
		marginLeft: '18rem',
	},
	root: {
		display: 'flex',
		justifyContent: 'center',
	},
	progress: {
		marginBottom: '1rem',
	},
}));

export const MiCuentaForm = ({ uid }) => {
	const classes = UseStyles();

	const [papers, setPapers] = useState('');
	const [subir, setSubir] = useState(false);
	const [progress, setProgress] = useState(0);
	const [data, setData] = useState([]);
	const [imagen, setImagen] = useState(imageAccount);

	useEffect(() => {
		controlador.cargarUsuario(uid, setData);
		controlador.cargarPaperDeUsuario(setPapers, data.nombre);
	}, []);

	useEffect(() => {
		if (data?.fotoPerfil) {
			controlador.bajarFoto(data.fotoPerfil, setImagen, 'usuarios');
			controlador.cargarPaperDeUsuario(setPapers, data.nombre);
		}
	}, [data?.fotoPerfil]);

	const handleUpload = (e) => {
		controlador.subirFoto(e, 'usuarios', setProgress);
		controlador.cambiarFoto(e);
		setSubir(true);
	};
	const handleSubmit = (e) => {
		window.location.reload();
	};

	return (
		<div>
			<Typography variant="" component="h1" className={classes.llena}>
				Consulta la informacion de tu cuenta
			</Typography>
			<form onSubmit={handleSubmit}>
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
							{subir && (
								<Box sx={{ width: '100%' }}>
									<LinearProgress
										variant="determinate"
										value={progress}
										className={classes.progress}
									/>
								</Box>
							)}
							{progress === 100 && (
								<Alert className={classes.alert} severity="success">
									Foto Subida!
								</Alert>
							)}
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
			<Typography variant="" component="h1" className={classes.llena}>
				Consulta tus papers
			</Typography>
			<div className={classes.root}>
				<List>
					{papers.length === 0 ? (
						<Typography variant="h1">No hay papers que mostrar</Typography>
					) : (
						papers.map((e, idx) => (
							<ListItem>
								<CardPaper key={idx} {...e} />
							</ListItem>
						))
					)}
				</List>
			</div>
		</div>
	);
};

//connect with state
const mapStateToProps = (state) => {
	return {
		uid: state.login_Reducer.uid,
	};
};

export default connect(mapStateToProps)(MiCuentaForm);
