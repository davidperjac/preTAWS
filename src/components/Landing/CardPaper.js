import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import imagePaper from './paper.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import StarRateIcon from '@material-ui/icons/StarRate';
import { IconButton, Button, Chip, Grid } from '@material-ui/core';
import './CardPaper.css';

import { CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	root: {
		maxWidth: '80vw',
		boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
		borderRadius: '50px',
		marginBottom: '30px',
		alignItems: 'center',
	},
	cover: {
		width: '100%',
		height: '100%',
	},
	extras: {
		display: 'flex',
		justifyContent: 'space-around',
		padding: '10px',
	},
	descripcion: {
		justifyContent: 'space-around',
		whiteSpace: 'unset',
		wordBreak: 'break-all',
	},
	gitHub: {
		padding: '30px 16px',
	},
	chip: {
		margin: theme.spacing(0.5),
	},
	chips: {
		display: 'flex',
		justifyContent: 'left',
		flexWrap: 'wrap',
		listStyle: 'none',
		paddingTop: '25px',
		paddingLeft: '25px',
		margin: 0,
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
								<div className={classes.extras}>
									<Typography variant="subtitle2">{autor}</Typography>
									<Typography variant="subtitle2">{fecha}</Typography>
									<Typography variant="subtitle2">{AreaEstudio}</Typography>
								</div>
								<div>
									<Typography
										variant="body2"
										component="p"
										className={classes.descripcion}
									>
										{descripcion}
										<br />
										{descripcion}
										<br />
									</Typography>
								</div>
								<div className={classes.chips}>
									{tags.map((tag) => {
										return (
											<Chip
												label={tag}
												color="primary"
												clickable
												className={classes.chip}
											/>
										);
									})}
								</div>
							</CardContent>
						</div>
					</Grid>
					<Grid item xs={1}>
						<CardContent className={classes.gitHub}>
							<Button variant="outlined" size="large" color="primary">
								<StarRateIcon />
								{numEstrellas}
							</Button>
							<div className={classes.gitHub}>
								<IconButton aria-label="github" color="primary">
									<GitHubIcon />
								</IconButton>
							</div>
						</CardContent>
					</Grid>
				</Grid>
			</Card>
		</div>
	);
};

export default CardPaper;
