import React from 'react';

import {
	Typography,
	makeStyles,
	Card,
	IconButton,
	Button,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import StarRateIcon from '@material-ui/icons/StarRate';

const UseStyles = makeStyles((theme) => ({
	llena: {
		paddingBottom: '1rem',
		paddingTop: '2rem',
		textAlign: 'center',
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
	gitHub,
}) => {
	const classes = UseStyles();
	return (
		<div>
			<Card className={classes.contenedor}>
				<Typography variant="" component="h1" className={classes.llena}>
					Titulo
				</Typography>
				<Typography variant="" component="h1" className={classes.llena}>
					Autor
				</Typography>
				<Typography variant="" component="h1" className={classes.llena}>
					Descripcion
				</Typography>
				<Typography variant="" component="h1" className={classes.llena}>
					Area de Estudio
				</Typography>
				<Typography variant="" component="h1" className={classes.llena}>
					Fecha
				</Typography>
				<Typography variant="" component="h1" className={classes.llena}>
					Tags
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
					Tags
				</Typography>
			</Card>
		</div>
	);
};

export default VistaPaper;