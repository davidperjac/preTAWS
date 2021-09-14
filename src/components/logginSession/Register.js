import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Logo from '../Landing/logo.png';
import { Provider } from 'react-redux';
import {store} from '../../redux/store';
import fondoR from './fondoR.jpeg';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import FormRegister from './FormRegister';

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

const Register = () => {
	const classes = useStyles();

	return (
		<Provider store={store}>
			<div style={{ backgroundColor: '#F3F7EE', overflow: 'hidden' }}>
				<Grid container className={classes.root}>
					<Grid item xs={12} sm={6}>
						<img src={fondoR} alt="logo" className={classes.foto} />
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
							<Typography variant="" component="h1">
								Cree una nueva cuenta
							</Typography>
							<FormRegister />
						</div>
					</Grid>
				</Grid>
			</div>
		</Provider>
	);
};

export default Register;
