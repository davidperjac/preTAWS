import React from 'react';
import Button from '@material-ui/core/Button';

const LoginButton = ({ color }) => {
	return (
		<div>
			<Button variant="contened" color="default" className={color}>
				INICIAR SESION
			</Button>
		</div>
	);
};

export default LoginButton;
