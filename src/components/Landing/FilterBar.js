import React from 'react';
import { makeStyles, Button, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import {
	onClick_Popular,
	onClick_ULTIMO,
	onClick_LO_MEJOR,
	POPULAR,
	ULTIMO,
	LO_MEJOR,
} from '../../redux/actions/FilterPaperAction';
//const Box = styled.div`${palette}`;

const useStyles = makeStyles((theme) => ({
	offset: theme.mixins.toolbar,

	root: {
		display: 'flex',
		justifyContent: 'flex-end',
		backgroundColor: '#e0e0e0',
	},
}));

const FilterBar = (props) => {
	const classes = useStyles();

	return (
		<Box bgcolor="gray.400" className={classes.root}>
			<Button onClick={() => props.onClick_Popular(POPULAR)}>popular</Button>
			<Button onClick={() => props.onClick_ULTIMO(ULTIMO)}>Ultimo</Button>
			<Button onClick={() => props.onClick_LO_MEJOR(LO_MEJOR)}>Lo Mejor</Button>
			{/*<AppBar position="static" color="default">
              <Toolbar className={classes.root}>
               
              </Toolbar>
            </AppBar>*/}
		</Box>
	);
};

const mapDispatchToProps = {
	onClick_Popular,
	onClick_ULTIMO,
	onClick_LO_MEJOR,
};

export default connect(null, mapDispatchToProps)(FilterBar);
