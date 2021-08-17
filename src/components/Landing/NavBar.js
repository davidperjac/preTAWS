import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBar from './SearchBar';
import { makeStyles, alpha } from '@material-ui/core';
import lime from '@material-ui/core/colors/lime';
import logo from './logo.png';
import './NavBar.css';
import LoginButton from './LoginButton';
import {connect} from 'react-redux';
import {SESION_INICIADA , SESION_CERRADA} from '../../redux/actions/LoginAction';
import MiCuentaButton from '../usuario/MiCuentaButton';

const useStyles = makeStyles((theme) => ({
	offset: theme.mixins.toolbar,
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	contentSearch: {
		flexGrow: 0,
	},
	colorElementNavBar: {
		backgroundColor: alpha(lime.A400, 0.7),
		'&:hover': {
			backgroundColor: alpha(lime.A400, 0.25),
		},
		borderRadius: '50px',
	},
	elementNavBar: {
		marginRight: '0.5em',
	},
}));

const NavBar = (props) => {
	const classes = useStyles();
	const option = props.login_Reducer.option;

	console.log("option:",option);

	const renderizadoBotones = () => {
		if(option === SESION_INICIADA ){
			return <MiCuentaButton color={classes.colorElementNavBar}/>
		} 
		if(option === SESION_CERRADA || option === ''){
			return <LoginButton color={classes.colorElementNavBar} />
		}
	}

	return (
		<div>
			<AppBar position="fixed" color="White">
				<Toolbar className={classes.root}>
					<div className={classes.root}>
							<img
								src={logo}
								className="logo"
								alt="Logo"
								width="60"
								height="60"
							/>
						<SearchBar color={classes.colorElementNavBar} />
					</div>
					{renderizadoBotones()}
					
				</Toolbar>
			</AppBar>
			<div className={classes.offset}></div>
			
		</div>
	);
};

const mapStateToProps = state => {
	return {
		login_Reducer: state.login_Reducer
	};
  };

export default connect(mapStateToProps)(NavBar);
