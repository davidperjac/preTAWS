import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import imagePaper from './paper.jpg';
import { Grid } from '@material-ui/core';
import './CardPaper.css';

import { CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	root: {
		maxWidth: '80vw',
		boxShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)',
		borderRadius: '50px',
		marginBottom: '30px',
		padding: '0'
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},

	cover: {
		width: '100%',
		height: '100%',
		backgroundSize: 'cover'
	},
	container:{
		boxShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)'
	},
	descripcion:{
		display: 'flex',
		alignItems: 'center',
		justifyContent : 'space-around'
	},
	content:{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	texto:{
		whiteSpace: 'pre-wrap',
		whiteSpace: '-moz-pre-wrap',
		whiteSpace: '-o-pre-wrap'
	}
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

	return (
		<div>
			<Card className={classes.root} >
				<Grid container spacing={0} >
					<Grid item xs={2}>
						<CardMedia
							className={classes.cover}
							title="imagen Paper"
							image={imagePaper}
							component="img"
						/>
					</Grid>

					<Grid item xs={7.2}>
						<div>
							<CardContent className={classes.content}>
								<Typography variant="" component="h1">
									{titulo}
								</Typography>
								<div className={classes.descripcion}>
									<Typography variant="subtitle1">
										{autor}
									</Typography>
									<Typography variant="subtitle1">
										{fecha}
									</Typography>
									<Typography variant="subtitle1">
										{AreaEstudio}
									</Typography>
								</div>
								<Typography variant="body2" component="p" >
									{
										descripcion
									}
								</Typography>
								<Typography variant="body2" component="p">
									{tags}
								</Typography>
							</CardContent>
						</div>
					</Grid>
					<Grid item xs={1}>
						<CardContent>
							<Typography variant="body2" component="p">
								{numEstrellas}
							</Typography>
							<Typography variant="body2" component="p">
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
