import React from 'react';
import Button from '@material-ui/core/Button';

const LoginButton = ({ color }) => {
	return (
		<div>
				<Button variant="contened" color="default" className={color}>
					Mi Cuenta
				</Button>		
		</div>
	);
};

export default LoginButton;
