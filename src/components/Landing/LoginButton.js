import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const LoginButton = ({ color }) => {
	return (
		<div>
			<NavLink exact to="/login" style={{ textDecoration: 'none' }}>
				<Button variant="contained" color="default" className={color}>
					INICIAR SESION
				</Button>
			</NavLink>
		</div>
	);
};

export default LoginButton;
