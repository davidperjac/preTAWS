import React, { useState } from 'react';
import { Icon, makeStyles } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import {
	FILTRO_PAPER,
	onClik_Filtro_Paper,
} from '../../redux/actions/OpcionesUsuarioAction';

const useStyles = makeStyles((theme) => ({
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
	root: {
		display: 'flex',
		alignItems: 'center',
	},
	elementSearchBar: {
		marginLeft: '0.5em',
	},
}));

const SearchBar = ({ color, onClik_Filtro_Paper }) => {
	const classes = useStyles();
	const [value, setValue] = useState('');

	const handelSubmit = (e) => {
		onClik_Filtro_Paper({
			option: FILTRO_PAPER,
			datos: value,
		});
	};

	return (
		<div className={color}>
			<form className={classes.root} onSubmit={handelSubmit}>
				<Icon aria-label="Search Icon" className={classes.elementSearchBar}>
					<SearchIcon />
				</Icon>
				<InputBase
					classes={{ root: classes.inputRoot, input: classes.inputInput }}
					inputProps={{ 'aria-label': 'Buscar Paper...' }}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder="Buscar Paper.."
				/>
			</form>
		</div>
	);
};

const mapDispatchToProps = {
	onClik_Filtro_Paper,
};

export default connect(null, mapDispatchToProps)(SearchBar);
