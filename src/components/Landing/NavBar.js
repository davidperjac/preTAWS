import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBar from './SearchBar';
import { makeStyles, alpha } from '@material-ui/core';
import lime from '@material-ui/core/colors/lime';
import logo from './logo.png';
import './NavBar.css';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';


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

const NavBar = () => {
	const classes = useStyles();

	return (
		<div>
			<AppBar position="fixed" color="White">
				<Toolbar className={classes.root}>
					<div className={classes.root}>
						<Link to="/">
							<img
								src={logo}
								className="logo"
								alt="Logo"
								width="60"
								height="60"
							/>
						</Link>
						<SearchBar color={classes.colorElementNavBar} />
					</div>

					<LoginButton color={classes.colorElementNavBar} />
				</Toolbar>
			</AppBar>
			<div className={classes.offset}></div>
			
		</div>
	);
};

export default NavBar;
