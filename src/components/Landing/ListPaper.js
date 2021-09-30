import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/system';
import CardPaper from './CardPaper';
import { connect } from 'react-redux';
import { POPULAR, ULTIMO } from '../../redux/actions/FilterPaperAction';
import {
	FILTRO_PAPER,
	onClik_Filtro_Paper,
} from '../../redux/actions/OpcionesUsuarioAction';
import controlador from '../../firebase/dataBase/CRUD';
import { CircularProgress } from '@mui/material';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: '3rem',
	},
}));

const ListPaper = (props) => {
	const [data, setData] = useState([]),
		classes = useStyles(),
		option = props.filterPaper_Reducer.option;

	const ordenar = () => {
		switch (option) {
			case POPULAR:
				data.sort((a, b) => b.numEstrellas.length - a.numEstrellas.length);
				break;
			case ULTIMO:
				data.sort((a, b) => {
					const fecha1 = a.fecha.split('/'),
						fecha2 = b.fecha.split('/');
					if (fecha1[2] > fecha2[2]) {
						return -1;
					} else if (fecha1[2] === fecha2[2]) {
						if (fecha1[1] > fecha2[1]) {
							return -1;
						} else if (fecha1[1] === fecha2[1]) {
							if (fecha1[0] > fecha2[0]) {
								return -1;
							} else {
								return 1;
							}
						} else {
							return 1;
						}
					} else {
						return 1;
					}
				});
				break;
			default:
		}
	};

	useEffect(() => {
		if (props.opciones_usuario_Reducer.option === FILTRO_PAPER) {
			controlador.cargarPaperFiltrado(
				setData,
				props.opciones_usuario_Reducer.datos
			);
		} else {
			controlador.cargarPaper(setData);
		}
	}, []);

	ordenar();

	return (
		<div className={classes.root}>
			<List>
				{data.length === 0 ? (
					<Box sx={{ display: 'flex' }} style={{ marginTop: '2rem' }}>
						<CircularProgress />
					</Box>
				) : (
					data.map((e, idx) => (
						<ListItem key={idx}>
							<CardPaper key={idx} {...e} />
						</ListItem>
					))
				)}
			</List>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		filterPaper_Reducer: state.filterPaper_Reducer,
		opciones_usuario_Reducer: state.opciones_usuario_Reducer,
	};
};

const mapDispatchToProps = {
	onClik_Filtro_Paper,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPaper);
