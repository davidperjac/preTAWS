import React, { useState } from 'react';
//import Typography from '@material-ui/core/Typography';
import {
	makeStyles,
	InputAdornment,
	Button,
	TextField,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { Alert } from '@material-ui/lab';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
	onClick_Iniciar_Sesion,
	SESION_INICIADA,
} from '../../redux/actions/LoginAction';
import autenticacion from '../../firebase/usuarios/autenticacion';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: '2rem',
	},
	btn_Style: {
		marginTop: '1rem',
		padding: '1rem',
		width: '100%',
	},
	element: {
		marginTop: '1rem',
	},
	alert: {
		marginTop: '2rem',
	},
}));

const FormLogin = (props) => {
	const classes = useStyles();
	const history = useHistory();
	const [correo, setCorreo] = useState('');
	const [contrasena, setContrasena] = useState('');

	const [error, setError] = useState('');
	const [cargando, setCargando] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setCargando('Cargando...');
		setLoading(true);
		const uid = await autenticacion.accederUsuario(correo, contrasena);
		if (uid) {
			props.onClick_Iniciar_Sesion({ option: SESION_INICIADA, uid });
			const id = autenticacion.sesionActiva();
			history.push(`/${id}`);
			setError('');
		} else {
			setError('Error: el usuario no existe en el sistema');
		}
		setLoading(false);
	};

	return (
		<div>
			{error && (
				<Alert className={classes.alert} severity="error">
					{error}
				</Alert>
			)}
			{cargando && (
				<Alert className={classes.alert} severity="info">
					{cargando}
				</Alert>
			)}
			<form>
				<div className={classes.root}>
					<TextField
						className={classes.element}
						value={correo}
						name="correo"
						onChange={(event) => setCorreo(event.target.value.trim())}
						id="correo"
						label="Correo"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<EmailIcon />
								</InputAdornment>
							),
						}}
					/>
					<TextField
						className={classes.element}
						value={contrasena}
						type="password"
						name="contrasena"
						onChange={(event) => setContrasena(event.target.value)}
						id="contrase??a"
						label="Password"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<LockIcon />
								</InputAdornment>
							),
						}}
					/>
					<Button
						variant="contained"
						className={classes.btn_Style}
						color="primary"
						disabled={loading}
						onClick={(e) => handleSubmit(e)}
					>
						Iniciar Sesion
					</Button>
					<NavLink exact to="/register" style={{ textDecoration: 'none' }}>
						<Button
							variant="contained"
							className={classes.btn_Style}
							color="primary"
						>
							Registrarse
						</Button>
					</NavLink>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		login_Reducer: state.login_Reducer,
	};
};

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			onClick_Iniciar_Sesion,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
