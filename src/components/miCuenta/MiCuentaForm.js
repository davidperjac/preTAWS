import React from 'react';
import {
	TextField,
	Card,
	Typography,
	CardMedia,
	Button,
	makeStyles,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import imageAccount from './account.png';

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
		paddingBottom: '1rem',
		paddingTop: '2rem',
		textAlign: 'center',
	},
	subirbtn: {
		marginTop: '1.5rem',
	},
	foto: {
		width: '70%',
		height: '70%',
		marginLeft: '6rem',
	},
}));

export const MiCuentaForm = () => {
	const classes = UseStyles();
	return (
		<div>
			<Typography variant="" component="h1" className={classes.llena}>
				Cambia la informacion de tu cuenta
			</Typography>
			<form>
				<Card className={classes.contenedor}>
					<div className={classes.inputs}>
						<Typography variant="" component="h3">
							Foto
						</Typography>
						<CardMedia
							className={classes.foto}
							title="imagen Paper"
							image={imageAccount}
							component="img"
						/>
						<Typography variant="" component="h3">
							Nombres
						</Typography>
						<TextField
							id="nombres"
							variant="outlined"
							className={classes.element}
						/>
						<Typography variant="" component="h3">
							Usuario
						</Typography>
						<TextField
							id="usuario"
							variant="outlined"
							className={classes.element}
						/>
						<Typography variant="" component="h3">
							Correo
						</Typography>
						<TextField
							id="correo"
							variant="outlined"
							className={classes.element}
						/>
						<Typography variant="" component="h3">
							Contraseña
						</Typography>
						<TextField
							id="contraseña"
							variant="outlined"
							className={classes.element}
						/>
					</div>
					<Button
						variant="contained"
						className={classes.btn_Style}
						color="primary"
						startIcon={<SaveIcon />}
					>
						GUARDAR CAMBIOS
					</Button>
				</Card>
			</form>
		</div>
	);
};

export default MiCuentaForm;
