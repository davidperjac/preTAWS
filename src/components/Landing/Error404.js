import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const UseStyles = makeStyles((theme) => ({
	llena: {
		paddingBottom: '1rem',
		paddingTop: '2rem',
		textAlign: 'center',
	},
}));

export const Error404 = () => {
	const classes = UseStyles();
	return (
		<div>
			<Typography variant="" component="h1" className={classes.llena}>
				Oops...pagina no encontrada
			</Typography>
		</div>
	);
};
