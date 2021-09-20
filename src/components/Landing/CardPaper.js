import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import imagePaper from './paper.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import StarRateIcon from '@material-ui/icons/StarRate';
import { IconButton, Button, Chip, Grid } from '@material-ui/core';
import './CardPaper.css';

import { CardContent, CardMedia, Typography } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
	root: {
		maxWidth: '80vw',
		boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
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
	},
	descripcion: {
		justifyContent: 'space-around',
		whiteSpace: 'unset',
		wordBreak: 'break-all',
	},
	gitHub: {
		paddingTop: 50,
		padding: 'auto',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			justifyContent: 'space-around',
		},
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
	titulo: {
		marginBottom: '1rem',
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
	const history = useHistory();

	const handleClick = async (e) => {
		e.preventDefault();
		const linkTitulo = titulo.toLowerCase().replaceAll(' ', '-');
		history.push(`/${linkTitulo}`);
	};

	return (
		<div styles={{ borderRadius: '2%' }}>
			<Card className={classes.root}>
				<Grid container spacing={0}>
					<Grid item sm={2} xs={12}>
						<CardMedia
							className={classes.cover}
							title="imagen Paper"
							image={imagePaper}
							component="img"
						/>
					</Grid>

					<Grid item sm={7.2}>
						<div>
							<CardContent>
								<NavLink
									exact
									to="/vista-paper"
									style={{ textDecoration: 'none', color: 'black' }}
								>
									<div onClick={handleClick}>
										<Typography
											variant=""
											component="h1"
											className={classes.titulo}
										>
											{titulo}
										</Typography>
									</div>
								</NavLink>
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
					<Grid item sm={1}>
						<CardContent className={classes.gitHub}>
							<Button variant="outlined" size="large" color="primary">
								<StarRateIcon />
								{numEstrellas}
							</Button>
							<IconButton aria-label="github" color="primary">
								<GitHubIcon />
							</IconButton>
						</CardContent>
					</Grid>
				</Grid>
			</Card>
		</div>
	);
};

export default CardPaper;
