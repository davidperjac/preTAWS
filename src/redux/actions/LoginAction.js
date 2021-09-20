export const SESION_INICIADA = 'SESION_INICIADA',
	SESION_CERRADA = 'SESION_CERRADA';

export const onClick_Iniciar_Sesion = (value) => {
	return {
		type: SESION_INICIADA,
		payload: value,
	};
};

export const onClick_Cerrar_Sesion = (value) => {
	return {
		type: SESION_CERRADA,
		payload: value,
	};
};
