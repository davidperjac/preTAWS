import React from 'react';
//import Typography from '@material-ui/core/Typography';
import {
	makeStyles,
	InputAdornment,
	Button,
	TextField,
	Typography,
	IconButton,
	Grid,
} from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';
import { NavLink } from 'react-router-dom';

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
	extras: {
		marginLeft: '1rem',
		marginTop: '2rem',
	},
}));

export const createPaperForm = () => {
	const classes = UseStyles();
	return (
		<div>
			<Typography variant="" component="h1" className={classes.llena}>
				Llena la informacion de tu paper
			</Typography>
			<form className={classes.contenedor}>
				<div className={classes.inputs}>
					<Typography variant="" component="h3">
						Titulo
					</Typography>
					<TextField
						id="titulo"
						variant="outlined"
						className={classes.element}
					/>
					<Typography variant="" component="h3">
						Descripcion
					</Typography>
					<TextField
						id="descripcion"
						multiline
						rows={4}
						variant="outlined"
						className={classes.element}
					/>
					<Typography variant="" component="h3">
						Link del Paper
					</Typography>
					<TextField
						id="link_paper"
						variant="outlined"
						className={classes.element}
					/>
					<Typography variant="" component="h3">
						Link del Repositorio
					</Typography>
					<TextField
						id="link_repo"
						variant="outlined"
						className={classes.element}
					/>
					<Grid container className={classes.extras}>
						<Grid item xs={12} sm={4}>
							<Typography variant="" component="h3">
								Foto
							</Typography>
							<input
								hidden
								accept="image/*"
								className={classes.input}
								id="icon-button-file"
								type="file"
							/>
							<label htmlFor="icon-button-file">
								<IconButton
									color="primary"
									aria-label="upload picture"
									component="span"
								>
									<PhotoCamera />
								</IconButton>
							</label>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Typography variant="" component="h3">
								Colaboradores
							</Typography>
							<TextField
								id="titulo"
								variant="outlined"
								className={classes.element}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Typography variant="" component="h3">
								Tags
							</Typography>
							<TextField
								id="titulo"
								variant="outlined"
								className={classes.element}
							/>
						</Grid>
					</Grid>
				</div>
				<Button
					variant="contained"
					className={classes.btn_Style}
					color="primary"
					startIcon={<SaveIcon />}
				>
					SUBIR PAPER
				</Button>
			</form>
		</div>
	);
};

export default createPaperForm;
