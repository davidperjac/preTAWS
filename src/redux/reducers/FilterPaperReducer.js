import { POPULAR, ULTIMO } from '../actions/FilterPaperAction';

const state_Initial = {
	option: '',
};

const filterPaper_Reducer = (state = state_Initial, action) => {
	switch (action.type) {
		case POPULAR: {
			return {
				...state,
				option: action.payload,
			};
		}
		case ULTIMO: {
			return {
				...state,
				option: action.payload,
			};
		}
		default:
			return state;
	}
};

export default filterPaper_Reducer;
