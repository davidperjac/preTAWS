import { MI_CUENTA_CLICK , CREAR_PAPER_CLICK , SALIR} from '../actions/OpcionesUsuarioAction';

const state_Initial = {
    option : ''

}

const opciones_usuario_Reducer = (state = state_Initial , action) => {
    switch (action.type) {
        case MI_CUENTA_CLICK: {
          return {
            ...state,
            option: action.payload
          };
        }
        case CREAR_PAPER_CLICK: {
          return {
            ...state,
            option: action.payload
          };
        }
        case SALIR: {
          return {
            ...state,
            option: action.payload
          }
        }
        default:
          return state;
      }
}

export default opciones_usuario_Reducer;