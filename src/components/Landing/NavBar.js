import React  , {useEffect ,useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBar from './SearchBar';
import { makeStyles, alpha } from '@material-ui/core';
import lime from '@material-ui/core/colors/lime';
import logo from './logo.png';
import './NavBar.css';
import LoginButton from './LoginButton';
import { connect } from 'react-redux';
import {
	SESION_INICIADA,
	SESION_CERRADA,
} from '../../redux/actions/LoginAction';
import MiCuentaButton from './MiCuentaButton';
import { NavLink } from 'react-router-dom';
import CrearPaperButton from './CrearPaperButton';
import { onClick_CrearPaper } from '../../redux/actions/OpcionesUsuarioAction'
import CerrarSesionButton from './CerrarSesionButton';
import autenticacion from '../../fierebase/usuarios/autenticacion';

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
		borderRadius: '10px',
	},
	elementNavBar: {
		marginRight: '0.5em',
	},
	botones: {
		display: 'flex',
		justifyContent: 'space-around',
	},
}));

const NavBar = (props) => {
	const classes = useStyles();
	const [sesion , setSesion] = useState('');
	//const [botones , setBotones] = useState(BotonesDefault());
	

	useEffect(() => {
		/*if (sesion === SESION_INICIADA) {
			console.log('SESION INICIADA');
			setBotones(BotonesSecionIniciada());
		} 
		if (sesion === SESION_CERRADA || sesion === '') {
			console.log('SESION CERRADA');
			setBotones(BotonesDefault());
		}*/
		setSesion(props.login_Reducer.option)
		const idUser = autenticacion.sesionActiva()
		if(idUser !== null){

		} else{

		}

	},[])

	useEffect(() => {
		setSesion(props.login_Reducer.option)
	},[props.login_Reducer])


	const renderizadoBotones = () => {
		//console.log('option:', option);
		if (sesion === SESION_INICIADA) {
			console.log('SESION INICIADA');
			return (
				<div className={classes.botones}>
					<div className={classes.elementNavBar}>
						<CrearPaperButton color={classes.colorElementNavBar}/>
					</div>
					<div className={classes.elementNavBar}>
						<MiCuentaButton color={classes.colorElementNavBar} />
					</div>
					<CerrarSesionButton color={classes.colorElementNavBar}/>
				</div>
			);
		}
		if (sesion === SESION_CERRADA || sesion === '') {
			console.log('SESION CERRADA');
			return (
				<div className={classes.botones}>
					<LoginButton color={classes.colorElementNavBar} />
				</div>
			);
		}
	};
	return (
		<div>
			<AppBar position="fixed" color="White">
				<Toolbar className={classes.root}>
					<div className={classes.root}>
						<NavLink exact to="/" onClick={() => props.onClick_CrearPaper('')}>
							<img
								src={logo}
								className="logo"
								alt="Logo"
								width="60"
								height="60"
							/>
						</NavLink>
						<SearchBar color={classes.colorElementNavBar} />
					</div>
					{renderizadoBotones()}
				</Toolbar>
			</AppBar>
			<div className={classes.offset}></div>
		</div>
	);
};

/*
const BotonesDefault = () => {
	const classes = useStyles();
	return (
		<div className={classes.botones}>
					<LoginButton color={classes.colorElementNavBar} />
		</div>
	);
}

const BotonesSecionIniciada = () => {
	const classes = useStyles();
	return (
		<div className={classes.botones}>
			<div className={classes.elementNavBar}>
				<CrearPaperButton color={classes.colorElementNavBar}/>
			</div>
			<div className={classes.elementNavBar}>
				<MiCuentaButton color={classes.colorElementNavBar} />
			</div>
				<CerrarSesionButton color={classes.colorElementNavBar}/>
		</div>
	);
}
*/

const mapStateToProps = (state) => {
	return {
		login_Reducer: state.login_Reducer,
	};
};

const mapDispatchToProps = {
	onClick_CrearPaper	
}


export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
