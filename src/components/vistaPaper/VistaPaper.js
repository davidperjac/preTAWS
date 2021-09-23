import React, { useState, useEffect } from 'react';

import {
	Typography,
	makeStyles,
	Card,
	IconButton,
	Button,
	CardMedia,
	Chip,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import StarRateIcon from '@material-ui/icons/StarRate';
import controlador from '../../firebase/dataBase/CRUD';
import DescriptionIcon from '@material-ui/icons/Description';

const UseStyles = makeStyles((theme) => ({
	llena: {
		paddingBottom: '1rem',
		paddingTop: '2rem',
		textAlign: 'center',
	},
	cover: {
		width: '100%',
		height: '100%',
	},
	texts: {
		display: 'flex',
		width: '75%',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: '2rem',
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
		alignItems: 'center',
		width: '60%',
		backgroundColor: '#D7D7D7',
		height: '100%',
		marginLeft: '18rem',
		marginBottom: '5rem',
		borderRadius: '15px',
	},
	chips: {
		marginRight: '1rem',
		marginLeft: '1rem',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

const VistaPaper = ({
	autor,
	titulo,
	descripcion,
	AreaEstudio,
	fecha,
	numEstrellas,
	tags,
	linkpaper,
	foto,
	linkrepo,
	colaboradores,
	id,
}) => {
	//const [paper, setPaper] = useState()
	/* useEffect(() => {
		controllador.getPaper(id)
		.then((result) => setPaper(result))
		.catch();
	}, []) */
	const classes = UseStyles();
	/* if (!paper) {
		//loading component from Material UI
		return (
			<div className={classes.llena}>
				<Typography variant="h5">Cargando...</Typography>
			</div>
		);
	} */
	const [imagen, setImagen] = useState('');
	console.log('datos:', {
		autor,
		titulo,
		descripcion,
		AreaEstudio,
		fecha,
		numEstrellas,
		tags,
		linkpaper,
		id,
		colaboradores,
	});

	useEffect(() => {
		if (foto) {
			controlador.bajarFoto(foto, setImagen, 'papers');
		}
	}, []);

	return (
		<div>
			<Card className={classes.contenedor}>
				<div className={classes.texts}>
					<CardMedia
						className={classes.cover}
						title="imagen Paper"
						image={imagen}
						component="img"
					/>
					<Typography variant="" component="h1" className={classes.llena}>
						Titulo
					</Typography>
					<Typography variant="" component="p" className={classes.llena}>
						{titulo}
					</Typography>
					<Typography variant="" component="h1" className={classes.llena}>
						Autor
					</Typography>
					<Typography variant="" component="p" className={classes.llena}>
						{autor}
					</Typography>
					<Typography variant="" component="h1" className={classes.llena}>
						Descripcion
					</Typography>
					{descripcion}
					<Typography variant="" component="h1" className={classes.llena}>
						Area de Estudio
					</Typography>
					<Typography variant="" component="p" className={classes.llena}>
						{AreaEstudio}
					</Typography>
					<Typography variant="" component="h1" className={classes.llena}>
						Fecha
					</Typography>
					<Typography variant="" component="p" className={classes.llena}>
						{fecha}
					</Typography>
					<Typography variant="" component="h1" className={classes.llena}>
						Tags
					</Typography>
					<Typography variant="" component="p" className={classes.llena}>
						<div className={classes.chips}>
							{tags.map((tag) => {
								return (
									<Chip
										label={tag}
										color="primary"
										clickable
										className={classes.chips}
									/>
								);
							})}
						</div>
					</Typography>
					<Typography variant="" component="h1" className={classes.llena}>
						Estrellas
					</Typography>
					<Button variant="outlined" size="large" color="primary">
						<StarRateIcon />
						{numEstrellas? numEstrellas.length: '0'}
					</Button>
					<Typography variant="" component="h1" className={classes.llena}>
						GitHub
					</Typography>
					<a href={linkrepo}>
						<IconButton aria-label="github" color="primary">
							<GitHubIcon />
						</IconButton>
					</a>
					<Typography variant="" component="h1" className={classes.llena}>
						Link del Paper
					</Typography>
					<a href={linkpaper}>
						<IconButton aria-label="paper" color="primary">
							<DescriptionIcon />
						</IconButton>
					</a>
					<Typography variant="" component="h1" className={classes.llena}>
						Colaboradores
					</Typography>
					<Typography variant="" component="p" className={classes.llena}>
						<div className={classes.chips}>
							{colaboradores.map((colaborador) => {
								return (
									<Chip
										label={colaborador}
										color="primary"
										clickable
										className={classes.chips}
									/>
								);
							})}
						</div>
					</Typography>
				</div>
			</Card>
		</div>
	);
};

export default VistaPaper;
