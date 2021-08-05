import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import imagePaper from './paper.jpg';
import { Grid } from '@material-ui/core';
import './CardPaper.css';

import {
	CardContent,
	CardMedia,
	Typography,
	useTheme,
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	root: {
		maxWidth: '70vw',
	},
	content: {},
	media: {},
}));

const CardPaper = ({
	autor,
	titulo,
	descripcion,
	AreaEstudio,
	fecha,
	numEstrellas,
	tags,
	gitHub,
}) => {
	const classes = useStyle();
	const theme = useTheme();

	return (
		<div className={classes.root}>
			<Card className="card">
				<Grid container spacing={0}>
					<Grid item xs={4}>
						<CardMedia
							className={classes.media}
							title="imagen Paper"
							image={imagePaper}
							component="img"
						/>
					</Grid>
					<Grid item xs={4}>
						<CardContent className={classes.content}>
							<Typography variant="h4" component="h4" align="right">
								{titulo}
							</Typography>
							<Typography variant="body" component="h2" align="right">
								{autor}
							</Typography>

							<Typography variant="body2" component="p" align="right">
								{fecha}
							</Typography>
							<Typography variant="body2" component="p" align="right">
								{AreaEstudio}
							</Typography>
							<Typography variant="body2" component="p" align="right">
								{descripcion}
							</Typography>
						</CardContent>
					</Grid>
					<Grid item xs={4}>
						<CardContent className={classes.content}>
							<Typography variant="body2" component="p" align="right">
								{tags}
							</Typography>
							<Typography variant="body2" component="p" align="right">
								{numEstrellas}
							</Typography>
							<Typography variant="body2" component="p" align="right">
								{gitHub}
							</Typography>
						</CardContent>
					</Grid>
				</Grid>
			</Card>
		</div>
	);
};

export default CardPaper;
