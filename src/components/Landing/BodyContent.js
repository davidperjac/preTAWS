import FilterBar from './FilterBar';
import ListPaper from './ListPaper';
import { connect } from 'react-redux';
import CreatePaperForm from '../createPaper/CreatePaperForm';
import MiCuentaForm from '../miCuenta/MiCuentaForm';
import { MI_CUENTA_CLICK , CREAR_PAPER_CLICK } from '../../redux/actions/OpcionesUsuarioAction'

const BodyContent = (props) => {
    
    const renderizadoCuerpo = () =>{
        if( props.opciones_usuario_Reducer === CREAR_PAPER_CLICK ){
            return (
                <>
                    <CreatePaperForm />
                </>
            );
        } else if( props.opciones_usuario_Reducer === MI_CUENTA_CLICK ) {
            return (
                <>
                    <MiCuentaForm/>
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
    }

    return (
        <div>
            {renderizadoCuerpo()}
        </div>
        )
}


const mapStateToProps = state => {
	return {
		opciones_usuario_Reducer: state.opciones_usuario_Reducer.option
	};
};

export default connect(mapStateToProps)(BodyContent)