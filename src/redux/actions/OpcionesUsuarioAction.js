export const MI_CUENTA_CLICK = "MI_CUENTA_CLICK",
	   CREAR_PAPER_CLICK = "CREAR_PAPER_CLICK";

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
