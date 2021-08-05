import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import imagePaper from './paper.jpg';

import {
	CardActionArea,
	CardContent,
	Typography,
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	root: {
		diplay: 'flex',
		minWidth: '70vW',
		flexWrap: "nowrap" 
	},
	child:{
		maxWidth: '25%'
	},
	child2:{
		maxWidth: '10%'
	}
}));

const CardPaper = (
	{
		autor,
		titulo,
		descripcion,
		AreaEstudio,
		fecha,
		numEstrellas,
		tags,
		gitHub,
	} /*{titulo, autor, AreaEstudio, fecha , descripcion , NumEstrellas, tags , gitHub}*/
) => {
	const classes = useStyle();

	return (
		<div > 
		<div className={classes.root}>
				<div>
					<img
						src={imagePaper}
						alt="Paper"
						width="252px"
						height="271px"
					/>
				</div>		
				<CardActionArea>
					<CardContent>
						<Typography variant="h5" component="h2">
							{titulo}
						</Typography>
						<Typography variant="body" component="h2">
							{autor}
						</Typography>
						<Typography variant="body2" component="p">
							{AreaEstudio}
						</Typography>
						<Typography variant="body2" component="p">
							{descripcion}
						</Typography>
						<Typography variant="body2" component="p">
							{fecha}
						</Typography>
						<Typography variant="body2" component="p">
							{tags}
						</Typography>
					</CardContent>
					<CardContent >
						<Typography variant="body2" component="p">
							{numEstrellas}
						</Typography>
						<Typography variant="body2" component="p">
							{gitHub}
						</Typography>
					</CardContent>
				</CardActionArea>
		</div>
		</div>
	);
};

export default CardPaper;
