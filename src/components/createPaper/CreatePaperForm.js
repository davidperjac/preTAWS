import React, { useState, useEffect } from 'react';
//import Typography from '@material-ui/core/Typography';
import {
	makeStyles,
	Button,
	TextField,
	Typography,
	Grid,
	Card,
	Box,
} from '@material-ui/core';
import { connect } from 'react-redux';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import controlador from '../../firebase/dataBase/CRUD';
import { Alert } from '@material-ui/lab';
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
	},
	inputs: {
		display: 'flex',
		width: '75%',
		flexDirection: 'column',
		marginTop: '2rem',
	},
	inputColor: {
		backgroundColor: 'white',
	},
	llena: {
		marginLeft: '20rem',
		paddingBottom: '2rem',
		paddingTop: '2rem',
	},
	subirbtn: {
		marginTop: '1.5rem',
	},
	progress: {
		marginTop: '1rem',
		width: '82%',
		marginBottom: '1rem',
	},
	alert: {
		marginTop: '1rem',
		width: '66%',
		marginBottom: '1rem',
	},
}));

export const CreatePaperForm = ({ uid }) => {
	const classes = UseStyles();

	const [user, setUser] = useState('');
	const [cargando, setCargando] = useState('');
	const [error, setError] = useState('');

	const [titulo, setTitulo] = useState('');
	//const [autor, setAutor] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [linkpaper, setLinkPaper] = useState('');
	const [linkrepo, setLinkRepo] = useState('');
	const [areaEstudio, setAreaEstudio] = useState('');
	const [foto, setFoto] = useState('');
	const [colaboradores, setColaboradores] = useState('');
	const [tags, setTags] = useState('');

	const [progress, setProgress] = useState(0);
	const [subir, setSubir] = useState(false);

	useEffect(() => {
		controlador.cargarUsuario(uid, setUser);
	}, []);

	function handleUpload(e) {
		controlador.subirFoto(e, 'papers', setProgress);
		setSubir(true);
		setFoto(e.target.files[0].name);
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const paper = {
			titulo: titulo,
			autor: user.nombre,
			descripcion: descripcion,
			linkpaper: linkpaper,
			fecha: new Date().toLocaleDateString(),
			AreaEstudio: areaEstudio,
			linkrepo: linkrepo,
			numEstrellas: [],
			foto: foto,
			colaboradores: colaboradores.split(','),
			tags: tags.split(','),
		};
		const res = controlador.subirDocumentosSinID('papers', paper);
		if (res) {
			setCargando('Paper creado');
			setTitulo('');
			setDescripcion('');
			setLinkPaper('');
			setLinkRepo('');
			setFoto('');
			setColaboradores('');
			setTags('');
		} else {
			setError('No se ha podido subir el paper');
			setCargando('');
		}
		//setAutor('');
	}
	return (
		<div>
			<Typography variant="inherit" component="h1" className={classes.llena}>
				Llena la informacion de tu paper
			</Typography>
			<form onSubmit={handleSubmit}>
				<Card className={classes.contenedor}>
					<div className={classes.inputs}>
						<Typography variant="inherit" component="h3">
							Titulo
						</Typography>
						<TextField
							id="titulo"
							variant="outlined"
							className={classes.element}
							onChange={(event) => setTitulo(event.target.value)}
						/>
						<Typography variant="inherit" component="h3">
							Descripcion
						</Typography>
						<TextField
							id="descripcion"
							multiline
							rows={4}
							variant="outlined"
							className={classes.element}
							onChange={(event) => setDescripcion(event.target.value)}
						/>
						<Typography variant="inherit" component="h3">
							Link del Paper
						</Typography>
						<TextField
							id="link_paper"
							variant="outlined"
							className={classes.element}
							onChange={(event) => setLinkPaper(event.target.value)}
						/>
						<Typography variant="inherit" component="h3">
							Link del Repositorio
						</Typography>
						<TextField
							id="link_repo"
							variant="outlined"
							className={classes.element}
							onChange={(event) => setLinkRepo(event.target.value)}
						/>
						<Typography variant="inherit" component="h3">
							Area de Estudio
						</Typography>
						<TextField
							id="area-estudio"
							variant="outlined"
							className={classes.element}
							onChange={(event) => setAreaEstudio(event.target.value)}
						/>
						<Grid container>
							<Grid item xs={12} sm={4}>
								<Typography variant="inherit" component="h3">
									Foto
								</Typography>
								<input
									hidden
									accept="image/*"
									className={classes.input}
									id="foto"
									type="file"
									onChange={handleUpload}
								/>
								<label htmlFor="foto">
									<Button
										variant="contained"
										color="primary"
										component="span"
										startIcon={<CloudUploadIcon />}
										className={classes.subirbtn}
										onChange={(event) => handleUpload(event)}
									>
										SUBE UNA FOTO
									</Button>
								</label>
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
							</Grid>
							<Grid item xs={12} sm={4}>
								<Typography variant="inherit" component="h3">
									Tags
								</Typography>
								<TextField
									id="titulo"
									variant="outlined"
									className={classes.element}
									onChange={(event) => setTags(event.target.value)}
								/>
							</Grid>
						</Grid>
						<Typography variant="inherit" component="h3">
							Colaboradores
						</Typography>
						<TextField
							id="titulo"
							variant="outlined"
							className={classes.element}
							onChange={(event) => setColaboradores(event.target.value)}
						/>
					</div>
					{cargando && <Alert severity="success">{cargando}</Alert>}
					{error && <Alert severity="error">{error}</Alert>}
					<Button
						variant="contained"
						className={classes.btn_Style}
						color="primary"
						startIcon={<SaveIcon />}
						type="submit"
					>
						SUBIR PAPER
					</Button>
				</Card>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		uid: state.login_Reducer.uid,
	};
};

export default connect(mapStateToProps)(CreatePaperForm);
