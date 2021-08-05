import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import imagePaper from './paper.jpg';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';

import {
	CardContent,
	CardMedia,
	Typography,
	useTheme,
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	root: {
		diplay: 'flex',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: '100%',
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
	const theme = useTheme();

	return (
		<div>
			<Card>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<CardMedia
							className={classes.cover}
							title="imagen Paper"
							image={imagePaper}
							component="img"
						/>
					</Grid>
					<Grid item xs={4}>
						<div className={classes.details}>
							<CardContent className={classes.content}>
								<Typography variant="h5" component="h5" align="right">
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
						</div>
					</Grid>
					<Grid item xs={4}>
						<CardContent className={classes.extras}>
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
