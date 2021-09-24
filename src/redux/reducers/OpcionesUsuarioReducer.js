import { MI_CUENTA_CLICK , CREAR_PAPER_CLICK , SALIR, PAPER_CLIK , FILTRO_PAPER} from '../actions/OpcionesUsuarioAction';

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
        case PAPER_CLIK: {
          console.log('======')
          console.log(action.payload)
          return {
            ...state,
            option: action.payload.option,
            datos: action.payload.datos
          }
        }
        case FILTRO_PAPER :{
          console.log('Sefiltra', action.payload);
          return {
            ...state,
            option: action.payload.option,
            datos: action.payload.datos
          }
        }
        default:
          return state;
      }
}

export default opciones_usuario_Reducer;