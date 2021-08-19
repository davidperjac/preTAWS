export const POPULAR = 'POPULAR',
	ULTIMO = 'ULTIMO',
	LO_MEJOR = 'LO_MEJOR';

export const onClick_Popular = (value) => {
	return {
		type: POPULAR,
		payload: value,
	};
};

export const onClick_ULTIMO = (value) => {
	return {
		type: ULTIMO,
		payload: value,
	};
};

export const onClick_LO_MEJOR = (value) => {
	return {
		type: LO_MEJOR,
		payload: value,
	};
};
