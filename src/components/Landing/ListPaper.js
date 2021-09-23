import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import paper from './papers.json';
import Typography from '@material-ui/core/Typography';
import CardPaper from './CardPaper';
import { connect } from 'react-redux';
import { POPULAR, ULTIMO } from '../../redux/actions/FilterPaperAction';
import controlador from '../../firebase/dataBase/CRUD';

//const initialData = controlador.cargarPaper()//paper.paper;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
	},
	contPaper: {
		width: '1300px',
		maxWidth: '1300px',
	}
}));

const ListPaper = (props) => {
	const [data, setData] = useState([]),
		classes = useStyles(),
		option = props.filterPaper_Reducer.option;

	console.log('es', data);

	const ordenar = () => {
		switch (option) {
			case POPULAR:
				data.sort((a, b) => b.NumEstrellas - a.NumEstrellas);
				break;
			case ULTIMO:
				data.sort((a, b) => a.NumEstrellas - b.NumEstrellas);
				break;
			default:
		}
	};

	useEffect(() => {
		controlador.cargarPaper(setData);
	}, []);

	ordenar();

	return (
		<div className={classes.root}>
			<List >
				{data.length === 0 ? (
					<Typography variant="h1">No Hay Papers que mostrar</Typography>
				) : (
					data.map((e, idx) => (
						<ListItem >
							<CardPaper
								key={idx}
								{...e}
							/>
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
	};
};

export default connect(mapStateToProps)(ListPaper);
