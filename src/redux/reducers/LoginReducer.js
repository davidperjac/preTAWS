import { SESION_INICIADA , SESION_CERRADA } from '../actions/LoginAction';

const state_Initial = {
    option : ''
}


const login_Reducer = (state = state_Initial , action) => {
  switch (action.type) {
        case SESION_INICIADA: {
          return {
            ...state,
            option: action.payload.option,
            uid: action.payload.uid,
          };
        }
        case SESION_CERRADA: {
          return {
            ...state,
            option: action.payload
          };
        }
        default:
          return state;
      }
}

export default login_Reducer;