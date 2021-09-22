import React , {useState} from 'react';
//import Typography from '@material-ui/core/Typography';
import {
	makeStyles,
	Button,
	TextField,
	Typography,
	Grid,
	Card,
} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';

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
}));

const initialForm = {
	titulo: '', 
	descripcion: '', 
	linkPaper: '',
	linkRepositorio: '',
	foto : '',
	tags: [],
	colboradores: ''
}

export const CreatePaperForm = () => {
	const [form , setForm] = useState(initialForm);
	const classes = UseStyles();

	const handleChange = (e) => {
		setForm({
			...form,
			e.target.name = e.target.value
		});
	}
	return (
		<div>
			<Typography variant="" component="h1" className={classes.llena}>
				Llena la informacion de tu paper
			</Typography>
			<form>
				<Card className={classes.contenedor}>
					<div className={classes.inputs}>
						<Typography variant="" component="h3">
							Titulo
						</Typography>
						<TextField
							id="titulo"
							variant="outlined"
							className={classes.element}
							name="titulo"
							value={form.titulo}
							onChange={(e) => handleChange(e)}
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
						<Grid container>
							<Grid item xs={12} sm={4}>
								<Typography variant="" component="h3">
									Foto
								</Typography>
								<input
									hidden
									accept="image/*"
									className={classes.input}
									id="contained-button-file"
									multiple
									type="file"
								/>
								<label htmlFor="contained-button-file">
									<Button
										variant="contained"
										color="primary"
										component="span"
										startIcon={<CloudUploadIcon />}
										className={classes.subirbtn}
									>
										SUBE UNA FOTO
									</Button>
								</label>
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
						<Typography variant="" component="h3">
							Colaboradores
						</Typography>
						<TextField
							id="titulo"
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
						SUBIR PAPER
					</Button>
				</Card>
			</form>
		</div>
	);
};

export default createPaperForm;
