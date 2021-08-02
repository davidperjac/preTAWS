import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyle = makeStyles( (theme) => ({
    root:{
        diplay: 'flex'
    }
}));

const CardPaper = ({titulo , descripcion}/*{titulo, autor, AreaEstudio, fecha , descripcion , NumEstrellas, tags , gitHub}*/) => {

    const classes = useStyle();

    return (
        <Card className={classes.root}>
            {/*<CardMedia
                component="img"
                alt="imagen Paper"
                image="./paper.jpg"
                title="imagen Paper"
            />*/}
            <CardContent>
                <Typography variant="h5" component="h2">
                    {titulo}
                </Typography>
                <Typography variant="body2" component="p">
                    {descripcion}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardPaper;