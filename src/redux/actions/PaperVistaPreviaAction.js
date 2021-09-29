export const VISTA_PREVIA = 'VISTA_PREVIA';

export const onclick_Paper = (value) => {
	return {
		type: VISTA_PREVIA,
		payload: value,
	};
};
