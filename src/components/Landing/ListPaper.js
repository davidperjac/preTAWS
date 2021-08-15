import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import paper from './papers.json';
import Typography from '@material-ui/core/Typography';
import CardPaper from './CardPaper';
import {connect} from 'react-redux';
import { POPULAR , ULTIMO , LO_MEJOR } from '../../redux/actions/FilterPaperAction';


const initialData = paper.paper;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
	},
}));

const ListPaper = (props) => {
	const [data, setData] = useState(initialData),
		  classes = useStyles(),
		  option = props.filterPaper_Reducer.option;

	//console.log(props.filterPaper_Reducer);

	const ordenar = () => {
		switch(option){
			case POPULAR:  data.sort((a,b) => b.NumEstrellas - a.NumEstrellas);
			break;
			default: 
		}
		
	}

	ordenar();

	return (
		<div className={classes.root}>
			<List>
				{data.length === 0 ? (
					<Typography variant="h1">No Hay Paper a mostrar</Typography>
				) : (
					data.map((e) => (
						<ListItem>
							<CardPaper
								titulo={e.titulo}
								autor={e.Autor}
								descripcion={e.descripcion}
								fecha={e.fecha}
								AreaEstudio={e.AreaEstudio}
								numEstrellas={e.NumEstrellas}
								tags={e.tags}
								gitHub={e.gitHub}
							/>
						</ListItem>
					))
				)}
			</List>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		filterPaper_Reducer: state.filterPaper_Reducer
	};
  };

export default connect(mapStateToProps)(ListPaper);
