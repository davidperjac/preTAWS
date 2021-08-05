import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import imagePaper from './paper.jpg';

import {
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	root: {
		diplay: 'flex',
		maxHeight: 1000,
		minWidth: '70vW',
		flexWrap: "nowrap" 
	},
	child:{
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
		<Card className={classes.root}>
			{/*<CardActionArea className={classes.root}>*/}
				<img
					src={imagePaper}
					alt="Paper"
					width="282px"
					height="281px"
					className={classes.child}
				/>
				
				{/*<CardMedia
					component="img"
					alt="imagen Paper"
					image="./paper.jpg"
					title="imagen Paper"
				/>*/}

				<CardContent className={classes.child}>
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
				<CardContent className={classes.child}>
					<Typography variant="body2" component="p">
						{numEstrellas}
					</Typography>
					<Typography variant="body2" component="p">
						{gitHub}
					</Typography>
				</CardContent>
			{/*</CardActionArea>*/}
		</Card>
		</div>
	);
};

export default CardPaper;
