import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const MiCuentaButton = ({ color }) => {
	return (
		<div>
			<NavLink exact to="/micuenta">
				<Button startIcon={<AccountCircleIcon />} className={color}>
					MI CUENTA
				</Button>
			</NavLink>
		</div>
	);
};

export default MiCuentaButton;
