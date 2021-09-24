import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Box } from '@material-ui/core';
//import paper from './papers.json';
import Typography from '@material-ui/core/Typography';
import CardPaper from './CardPaper';
import { connect } from 'react-redux';
import { POPULAR, ULTIMO } from '../../redux/actions/FilterPaperAction';
import { FILTRO_PAPER } from '../../redux/actions/OpcionesUsuarioAction';
import controlador from '../../firebase/dataBase/CRUD';
//import { CircularProgress } from '@material-ui/lab';
//import Box from '@mui/material/Box';

//const initialData = controlador.cargarPaper()//paper.paper;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: '2rem',
	},
}));

const ListPaper = (props) => {
	const [data, setData] = useState([]),
		classes = useStyles(),
		option = props.filterPaper_Reducer.option;

	//console.log('es', data);

	const ordenar = () => {
		switch (option) {
			case POPULAR:
				data.sort((a, b) => b.numEstrellas.length - a.numEstrellas.length);
				break;
			case ULTIMO:
				//controlador.cargarPaper(setData);
				//data.sort((a, b) => a.numEstrellas.length - b.numEstrellas.length);
				data.sort((a, b) =>  {
					const fecha1 = a.fecha.split('/'),
						  fecha2 = b.fecha.split('/');
					
					if(fecha1[2]>fecha2[2]){
						return -1;
					}else if( fecha1[2] === fecha2[2] ){
						if(fecha1[1]>fecha2[1]){
							return -1;
						}else if(fecha1[1] === fecha2[1]){
							if(fecha1[0] > fecha2[0]){
								return -1;
							}else{
								return 1
							}
						}else{
							return 1;
						}
					}else{
						return 1
					}
				});
				break;
			default:
		}
	};

	useEffect(() => {
		console.log('estado :' , props.opciones_usuario_Reducer.option);
		if(props.opciones_usuario_Reducer.option === FILTRO_PAPER){
			console.log('Lista de paper filtrados');
			console.log(props.opciones_usuario_Reducer.datos)
			controlador.cargarPaperFiltrado(setData , props.opciones_usuario_Reducer.datos);
		}else{
			controlador.cargarPaper(setData);
		}
		console.log('Se vuelve a cargar');
	}, []);

	ordenar();

	return (
		<div className={classes.root}>
			<List>
				{data.length === 0 ? (
					<Typography variant="h1">No hay papers que mostrar</Typography>
				) : (
					data.map((e, idx) => (
						<ListItem>
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
		opciones_usuario_Reducer: state.opciones_usuario_Reducer
	};
};

export default connect(mapStateToProps)(ListPaper);
