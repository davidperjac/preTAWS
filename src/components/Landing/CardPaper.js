import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import imagePaper from './paper.jpg';
import imageAccount from './account.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import StarRateIcon from '@material-ui/icons/StarRate';
import { IconButton, Button, Chip, Grid, Avatar } from '@material-ui/core';
import './CardPaper.css';
import {
	onClick_Paper,
	PAPER_CLIK,
} from '../../redux/actions/OpcionesUsuarioAction';
//import {
//	VISTA_PREVIA,
//	onclick_Paper_Title,
//} from '../../redux/actions/PaperVistaPreviaAction';
import { connect } from 'react-redux';
import { CardContent, CardMedia, Typography } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import controlador from '../../firebase/dataBase/CRUD';

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
	foto: {
		marginBottom: '1rem',
		alignItems: 'right',
		marginLeft: theme.spacing(3),
	},
}));

const CardPaper = ({
	id,
	uid,
	autor,
	titulo,
	descripcion,
	AreaEstudio,
	fecha,
	numEstrellas,
	colaboradores,
	foto,
	tags,
	linkrepo,
	linkpaper,
	onClick_Paper,
}) => {
	const classes = useStyle();
	const history = useHistory();

	const [imagen, setImagen] = useState(imagePaper);
	const [user, setUser] = useState('');
	const [imagePerfil, setImagePerfil] = useState(imageAccount);
	const [likes, setLikes] = useState(0);

	const handleClick = async (e) => {
		e.preventDefault();
		const linkTitulo = titulo.toLowerCase().replaceAll(' ', '-');
		history.push(`/${linkTitulo}`);
		console.log({
			autor,
			titulo,
			descripcion,
			AreaEstudio,
			fecha,
			numEstrellas,
			tags,
			linkrepo,
		});

		//controllador.like([ ...likes, uid ])
		onClick_Paper({
			option: PAPER_CLIK,
			datos: {
				id,
				autor,
				titulo,
				descripcion,
				AreaEstudio,
				fecha,
				numEstrellas,
				tags,
				foto,
				linkrepo,
				linkpaper,
				colaboradores,
			},
		});
	};
	useEffect(() => {
		console.log('paper: ', {
			id,
			autor,
			titulo,
			descripcion,
			AreaEstudio,
			fecha,
			numEstrellas,
			tags,
			foto,
			linkrepo,
			linkpaper,
			colaboradores,
		});
		numEstrellas ? setLikes(numEstrellas.length) : setLikes(0);
		controlador.cargarUsuarioConNombre(autor, setUser);
		//controlador.bajarFoto(user.fotoPerfil, setImagePerfil, 'usuarios');
	}, []);

	useEffect(() => {
		//console.log(linkrepo);
		if (foto !== undefined) {
			controlador.bajarFoto(foto, setImagen, 'papers');
		}
	}, [foto]);

	//const liked = likes.includes(uid);
	//logic nice

	const clickLike = () => {
		console.log('entro');
		if (numEstrellas !== undefined) {
			console.log('entro');
			const n = numEstrellas.length;
			if (!numEstrellas.includes(uid)) {
				numEstrellas.push(uid);
				controlador.actualizarDocumento('papers', id, numEstrellas);
				setLikes(n + 1);
				console.log('likes', likes);
			}
		}
	};
	return (
		<div styles={{ borderRadius: '2%' }}>
			<Card className={classes.root}>
				<Grid container spacing={0}>
					<Grid item sm={2}>
						<CardMedia
							className={classes.cover}
							title="imagen Paper"
							image={imagen}
							component="img"
						/>
					</Grid>
					<Grid item sm={8}>
						<div>
							<CardContent>
								<Grid container>
									<Grid item sm={12}>
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
									</Grid>
									<Grid container item sm={12}>
										<Grid container item sm={12} className={classes.extras}>
											<Avatar
												alt="Remy Sharp"
												src={imagePerfil}
												sx={{ width: 50, height: 50 }}
												className={classes.foto}
											/>
											<Typography variant="subtitle2">{autor}</Typography>
											<Typography variant="subtitle2">{fecha}</Typography>
											<Typography variant="subtitle2">{AreaEstudio}</Typography>
										</Grid>
										<Grid container item sm={12}>
											<Typography
												variant="body2"
												component="p"
												className={classes.descripcion}
											>
												{descripcion
													? `${descripcion.slice(0, 350)}...`
													: 'No hay descripcion'}
												<br />
											</Typography>
										</Grid>
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
									</Grid>
								</Grid>
							</CardContent>
						</div>
					</Grid>
					<Grid item sm={2}>
						<CardContent className={classes.gitHub}>
							<Button
								variant="outlined"
								size="large"
								color="primary"
								onClick={clickLike}
							>
								<StarRateIcon />
								{likes}
							</Button>
							<a href={linkrepo}>
								<IconButton aria-label="github" color="primary">
									<GitHubIcon />
								</IconButton>
							</a>
						</CardContent>
					</Grid>
				</Grid>
			</Card>
		</div>
	);
};

const mapStateToProps = (state) => ({
	uid: state.login_Reducer.uid,
});

const mapDispatchToProps = {
	onClick_Paper,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPaper);
