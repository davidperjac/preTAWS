import { combineReducers } from 'redux';
import filterPaper_Reducer from './FilterPaperReducer';
import login_Reducer from './LoginReducer';

const rootReducer = combineReducers({
    filterPaper_Reducer,
    login_Reducer
});

export default rootReducer;
