import { combineReducers } from 'redux';
import filterPaper_Reducer from './FilterPaperReducer';
import login_Reducer from './LoginReducer';
import opciones_usuario_Reducer from './OpcionesUsuarioReducer'

const rootReducer = combineReducers({
    filterPaper_Reducer,
    login_Reducer,
    opciones_usuario_Reducer
});

export default rootReducer;
