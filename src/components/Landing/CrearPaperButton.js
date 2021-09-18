import React from 'react';
import Button from '@material-ui/core/Button';
//import { NavLink } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { CREAR_PAPER_CLICK , onClick_CrearPaper} from '../../redux/actions/OpcionesUsuarioAction'

const crearPaperButton = (props) => {

	return (
		<div>
			<Button 
				startIcon={<AddIcon />} 
				className={props.color} 
				variant="contened" 
				color="default"
				onClick = {() => props.onClick_CrearPaper(CREAR_PAPER_CLICK)}
			>
				CREAR PAPER
			</Button>
		</div>
	);
};

const mapDispatchToProps = {
	onClick_CrearPaper
}

export default connect(null,mapDispatchToProps)(crearPaperButton);
