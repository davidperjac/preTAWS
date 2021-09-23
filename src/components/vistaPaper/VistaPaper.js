import React from 'react';

import {
	Typography,
	makeStyles,
	Card,
	IconButton,
	Button,
	Avatar,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import StarRateIcon from '@material-ui/icons/StarRate';

const UseStyles = makeStyles((theme) => ({
	llena: {
		paddingBottom: '1rem',
		paddingTop: '2rem',
		textAlign: 'center',
	},
	texts: {
		display: 'flex',
		width: '75%',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: '2rem',
	},
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
	subirbtn: {
		marginTop: '1.5rem',
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
	linkrepo,
	colaboradores,
	idPaper,
}) => {
	//const [paper, setPaper] = useState()
	/* useEffect(() => {
		controllador.getPaper(idPaper)
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
	console.log('datos:', { autor,
		titulo,
		descripcion,
		AreaEstudio,
		fecha,
		numEstrellas,
		tags,
		linkpaper,
		idPaper,
		colaboradores}
		);

	let t = '';
	let c = ''

	const writeTags = () => {
		if(tags !== undefined){
			tags.forEach(element => {
				t += element + ' , ';
			});
		}else{
			t= 'ninguno'
		}
		
	}

	const writeColaboradores = () => {
		if(colaboradores!== undefined){
			colaboradores.forEach(element => {
				c += element + ' , ';
			});
		}else{
			c = 'ninguno' 
		}
		
	}

	writeTags();
	writeColaboradores();
	
	return (
		<div>
			<Card className={classes.contenedor}>
				<div className={classes.texts}>
				<Avatar
					alt="Remy Sharp"
					src={{}}
					sx={{ width: 56, height: 56 }}
					className={classes.foto}
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
					{t}
				</Typography>
				<Typography variant="" component="h1" className={classes.llena}>
					Estrellas
				</Typography>
				<Button variant="outlined" size="large" color="primary">
					<StarRateIcon />
					{numEstrellas}
				</Button>
				<Typography variant="" component="h1" className={classes.llena}>
					GitHub
				</Typography>
				<IconButton aria-label="github" color="primary">
					<GitHubIcon />
				</IconButton>
				<Typography variant="" component="h1" className={classes.llena}>
					Link del Paper
				</Typography>
				<Typography variant="" component="p" className={classes.llena}>
					{linkpaper}
				</Typography>
				<Typography variant="" component="h1" className={classes.llena}>
					Colaboradores
				</Typography>
				<Typography variant="" component="p" className={classes.llena}>
					{c}
				</Typography>
				</div>
			</Card>
		</div>
	);
};

export default VistaPaper;
