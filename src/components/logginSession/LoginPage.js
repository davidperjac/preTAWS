import React from 'react';
import FormLogin from './FormLogin';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Logo from '../Landing/logo.png';
import { Provider } from 'react-redux';
//import {store} from '../../redux/store';
import fondo from './fondo.jpg';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {store , persistor} from '../../redux/store';


const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
	},
	formroot: {
		padding: 10,
		alignItems: 'center',
		direction: 'column',
		justify: 'space-between',
	},
	foto: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: 500,
		minWidth: 400,
		paddingLeft: '20vh',
	},
	logo: {
		paddingBottom: '5vh',
	},
}));

const LoginPage = () => {
	const classes = useStyles();

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<div style={{ backgroundColor: '#F3F7EE', overflow: 'hidden' }}>
					<Grid container className={classes.root}>
						<Grid item xs={12} sm={6}>
							<img src={fondo} alt="logo" className={classes.foto} />
						</Grid>
						<Grid container item xs={12} sm={6} className={classes.formroot}>
							<div className={classes.form}>
								<Grid container justify="center" className={classes.logo}>
									<NavLink exact to="/">
										<img
											src={Logo}
											className="logo"
											alt="Logo"
											width="80"
											height="80"
										/>
									</NavLink>
								</Grid>
								<Typography variant="" component="h2">
									Bienvenido
								</Typography>
								<Typography variant="" component="h1">
									Ingrese a su cuenta
								</Typography>
								<FormLogin />
							</div>
						</Grid>
					</Grid>
				</div>
			</PersistGate>
		</Provider>
	);
};

export default LoginPage;
