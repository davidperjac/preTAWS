import React from 'react';
import { Icon, makeStyles } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles';

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
		//padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
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

const SearchBar = ({ color }) => {
	const classes = useStyles();

	return (
		<div className={color}>
			<form className={classes.root}>
				<Icon aria-label="Search Icon" className={classes.elementSearchBar}>
					<SearchIcon />
				</Icon>
				<InputBase
					classes={{ root: classes.inputRoot, input: classes.inputInput }}
					inputProps={{ 'aria-label': 'Buscar Paper...' }}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
