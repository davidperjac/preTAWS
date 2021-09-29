export const MI_CUENTA_CLICK = 'MI_CUENTA_CLICK',
	CREAR_PAPER_CLICK = 'CREAR_PAPER_CLICK',
	SALIR = 'SALIR',
	PAPER_CLIK = 'PAPER_CLICK',
	FILTRO_PAPER = 'FILTRO_PAPER';

export const onClick_MiCuenta = (value) => {
	return {
		type: MI_CUENTA_CLICK,
		payload: value,
	};
};

export const onClick_CrearPaper = (value) => {
	return {
		type: CREAR_PAPER_CLICK,
		payload: value,
	};
};

export const onClick_Salir = (value) => {
	return {
		type: SALIR,
		payload: value,
	};
};

export const onClick_Paper = (value) => {
	return {
		type: PAPER_CLIK,
		payload: value,
	};
};

export const onClik_Filtro_Paper = (value) => {
	return {
		type: FILTRO_PAPER,
		payload: value,
	};
};
