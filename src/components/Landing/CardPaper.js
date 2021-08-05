import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import imagePaper from './paper.jpg';
import { Grid } from '@material-ui/core';

import {
	CardContent,
	CardMedia,
	Typography,
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	root: {
		maxWidth: '80vw'
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	cover: {
		width: '100%',
		height: '100%'
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
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
			<Card className={classes.root}>
				<Grid container spacing={0}>
					<Grid item xs={4}>
						<CardMedia
							className={classes.cover}
							title="imagen Paper"
							image={imagePaper}
							component="img"
						/>
					</Grid>
					<Grid item xs={4}>
						<div >
							<CardContent>
								<Typography variant="h5" component="h5">
									{titulo}
								</Typography>
								<Typography variant="body" component="h2">
									{autor}
								</Typography>
								<Typography variant="body2" component="p">
									{fecha}
								</Typography>
								<Typography variant="body2" component="p">
									{AreaEstudio}
								</Typography>
								<Typography variant="body2" component="p">
									{descripcion}
								</Typography>
							</CardContent>
						</div>
					</Grid>
					<Grid item xs={4}>
						<CardContent className={classes.extras}>
							<Typography variant="body2" component="p">
								{tags}
							</Typography>
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
