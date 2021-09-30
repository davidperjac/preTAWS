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

import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

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
	tags: {
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
		marginTop: '2rem',
		width: '66%',
		marginBottom: '1rem',
	},
	conf: {
		marginTop: '1.5rem',
	},
	colaboradores: {
		marginTop: '5rem',
		marginBottom: '1rem',
		background: 'white',
		borderRadius: '15px',
		[`& fieldset`]: {
			borderRadius: 15,
		},
	},
}));

export const CreatePaperForm = ({ uid }) => {
	const classes = UseStyles();

	const [user, setUser] = useState('');
	const [cargando, setCargando] = useState('');
	const [error, setError] = useState('');

	const [titulo, setTitulo] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [linkpaper, setLinkPaper] = useState('');
	const [linkrepo, setLinkRepo] = useState('');
	const [areaEstudio, setAreaEstudio] = useState('');
	const [foto, setFoto] = useState('');
	const [colaboradores, setColaboradores] = useState([]);
	const [tagName, setTagName] = useState([]);

	const [progress, setProgress] = useState(0);
	const [subir, setSubir] = useState(false);
	const [usuarios, setUsuarios] = useState([]);

	useEffect(() => {
		controlador.cargarUsuario(uid, setUser);
		controlador.cargarNombresUsuarios(setUsuarios);
	}, []);

	const nameTags = [
		'Matematicas',
		'ESPOL',
		'Ciencia de Datos',
		'Machine Learning',
		'IA',
		'Fisica',
		'Deep Learning',
		'Naturaleza',
		'Computacion',
		'Progamacion',
		'Electronica',
	];

	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	function handleUpload(e) {
		controlador.subirFoto(e, 'papers', setProgress);
		setSubir(true);
		setFoto(e.target.files[0].name);
	}

	const handleChangeTags = (event) => {
		const {
			target: { value },
		} = event;
		setTagName(
			// On autofill we get a the stringified value.
			typeof value === 'string' ? value.split(',') : value
		);
	};

	const handleChangeCol = (event) => {
		const {
			target: { value },
		} = event;
		setColaboradores(
			// On autofill we get a the stringified value.
			typeof value === 'string' ? value.split(',') : value
		);
	};

	function handleSubmit(e) {
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
			colaboradores: colaboradores,
			tags: tagName,
		};
		const allProps =
			paper.titulo !== '' &&
			paper.autor !== '' &&
			paper.descripcion !== '' &&
			paper.linkpaper !== '' &&
			paper.AreaEstudio !== '' &&
			paper.linkrepo !== '' &&
			paper.foto !== '' &&
			paper.colaboradores !== '' &&
			paper.tags !== '';

		if (allProps) {
			const res = controlador.subirDocumentosSinID('papers', paper);
			if (res) {
				setError('');
				setCargando('Paper creado');
				setTitulo('');
				setDescripcion('');
				setLinkPaper('');
				setLinkRepo('');
				setFoto('');
				setColaboradores('');
			}
		} else {
			setError('Llene todos los campos!');
			setCargando('');
		}
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
								<FormControl sx={{ m: 1, width: 300 }} className={classes.tags}>
									<Select
										labelId="tags"
										id="tags"
										multiple
										value={tagName}
										onChange={handleChangeTags}
										input={<OutlinedInput label="Tag" />}
										renderValue={(selected) => selected.join(', ')}
										MenuProps={MenuProps}
									>
										{nameTags.map((tag) => (
											<MenuItem key={tag} value={tag}>
												<Checkbox checked={tagName.indexOf(tag) > -1} />
												<ListItemText primary={tag} />
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
						</Grid>
						<Typography
							variant="inherit"
							component="h3"
							style={{ marginBottom: '1rem' }}
						>
							Colaboradores
						</Typography>
						<FormControl
							sx={{ m: 1, width: 300 }}
							className={classes.colaboradores}
						>
							<Select
								labelId="colaboradores"
								id="colaboradores"
								multiple
								value={colaboradores}
								onChange={handleChangeCol}
								input={<OutlinedInput label="Tag" />}
								renderValue={(selected) => selected.join(', ')}
								MenuProps={MenuProps}
							>
								{usuarios.map((tag) => (
									<MenuItem key={tag} value={tag}>
										<Checkbox checked={tagName.indexOf(tag) > -1} />
										<ListItemText primary={tag} />
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>
					{cargando && (
						<Alert severity="success" className={classes.alert}>
							{cargando}
						</Alert>
					)}
					{error && (
						<Alert severity="error" className={classes.conf}>
							{error}
						</Alert>
					)}
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
