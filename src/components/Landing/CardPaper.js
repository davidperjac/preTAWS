import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import imagePaper from './paper.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import StarRateIcon from '@material-ui/icons/StarRate';
import { IconButton, Button, Chip, Grid } from '@material-ui/core';
import './CardPaper.css';
import {
  onClick_Paper,
  PAPER_CLIK,
} from '../../redux/actions/OpcionesUsuarioAction';
import {
  VISTA_PREVIA,
  onclick_Paper_Title,
} from '../../redux/actions/PaperVistaPreviaAction';
import { connect } from 'react-redux';
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
  id,
	uid,
  autor,
  titulo,
  descripcion,
  AreaEstudio,
  fecha,
  numEstrellas,
  tags,
	likes = [],
  gitHub,
  onClick_Paper,
  onclick_Paper_Title,
}) => {
  const classes = useStyle();
  const history = useHistory();

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
      gitHub,
    });
    /*onclick_Paper_Title({
			autor,
			titulo,
			descripcion,
			AreaEstudio,
			fecha,
			numEstrellas,
			tags,
			gitHub
		});*/
		//controllador.like([ ...likes, uid ])
    onClick_Paper({ option: PAPER_CLIK, currentPaperId: id });
  };
  useEffect(() => {
    //effect;
    return () => {
      //cleanup;
    };
  }, []);

	const liked = likes.includes(uid);
	//logic nice

	const clickLike = () => {
		const liked = likes.includes(uid);
		if (liked) {
			//unlike
			//controllador.unlike(likes.filter((id) => id !== uid));
		}
		//controllador.like([...likes, uid]);
	}
  return (
    <div styles={{ borderRadius: '2%' }}>
      <Card className={classes.root}>
        <Grid container spacing={0}>
          <Grid item sm={2}>
            <CardMedia
              className={classes.cover}
              title="imagen Paper"
              image={imagePaper}
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

const mapStateToProps = (state) => ({
	uid: state.login_Reducer.uid
});

const mapDispatchToProps = {
  onClick_Paper,
  onclick_Paper_Title,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPaper);
