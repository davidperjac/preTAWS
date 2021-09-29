import { VISTA_PREVIA } from '../actions/PaperVistaPreviaAction';

const state_Initial = {
	value: {},
};

const paper_vista_previa_Reducer = (state = state_Initial, action) => {
	switch (action.type) {
		case VISTA_PREVIA: {
			return {
				...state_Initial,
				value: action.payload,
			};
		}
		default:
			return state_Initial;
	}
};

export default paper_vista_previa_Reducer;
