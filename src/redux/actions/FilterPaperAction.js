export const POPULAR = 'POPULAR',
	ULTIMO = 'ULTIMO';

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
