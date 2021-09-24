import React from 'react';
import { makeStyles, Button, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import {
	onClick_Popular,
	onClick_ULTIMO,
	POPULAR,
	ULTIMO,
} from '../../redux/actions/FilterPaperAction';
//const Box = styled.div`${palette}`;

const useStyles = makeStyles((theme) => ({
	offset: theme.mixins.toolbar,

	root: {
		display: 'flex',
		justifyContent: 'flex-end',
		backgroundColor: '#e0e0e0',
	},
	botones: {
		marginRight: '38rem',
	},
}));

const FilterBar = (props) => {
	const classes = useStyles();

	return (
		<Box bgcolor="gray.400" className={classes.root}>
			<Button
				//className={classes.botones}
				onClick={() => {
					props.onClick_Popular(POPULAR);
					//window.location.reload();
				}}
			>
				popular
			</Button>
			<Button
				className={classes.botones}
				onClick={() => {
					props.onClick_ULTIMO(ULTIMO);
					//window.location.reload();
				}}
			>
				Ultimo
			</Button>
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
};

export default connect(null, mapDispatchToProps)(FilterBar);
