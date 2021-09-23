import React from 'react';
import FilterBar from './FilterBar';
import ListPaper from './ListPaper';
import { connect } from 'react-redux';
import CreatePaperForm from '../createPaper/CreatePaperForm';
import MiCuentaForm from '../miCuenta/MiCuentaForm';
import {
	MI_CUENTA_CLICK,
	CREAR_PAPER_CLICK,
	SALIR,
	PAPER_CLIK,
} from '../../redux/actions/OpcionesUsuarioAction';
import VistaPaper from '../vistaPaper/VistaPaper';
import { PinDropSharp } from '@material-ui/icons';

const BodyContent = (props) => {
	const renderizadoCuerpo = () => {
		if (props.opciones_usuario_Reducer.option === CREAR_PAPER_CLICK) {
			return (
				<>
					<CreatePaperForm />
				</>
			);
		} else if (props.opciones_usuario_Reducer.option === MI_CUENTA_CLICK) {
			return (
				<>
					<MiCuentaForm />
				</>
			);
		} else if (props.opciones_usuario_Reducer.option === SALIR) {
			return (
				<>
					<FilterBar />
					<ListPaper />
				</>
			);
		} else if(props.opciones_usuario_Reducer.option === PAPER_CLIK) {
			return (
				<>
					<VistaPaper
						{...props.opciones_usuario_Reducer.datos}
					/>
				</>
			);
		} else {
			return (
				<>
					<FilterBar />
					<ListPaper />
				</>
			);
		}
	};
	return <div>{renderizadoCuerpo()}</div>;
};

const mapStateToProps = (state) => {
	return {
		opciones_usuario_Reducer: state.opciones_usuario_Reducer,
		paper_vista_previa_Reducer: state.paper_vista_previa_Reducer
	};
};

export default connect(mapStateToProps)(BodyContent);
