import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

const crearPaperButton = ({ color }) => {
	return (
		<div>
			<NavLink exact to="/crear-paper">
				<Button
					variant="outlined"
					//color="primary"
					startIcon={<AddIcon />}
					className={color}
				>
					CREAR PAPER
				</Button>
			</NavLink>
		</div>
	);
};

export default crearPaperButton;
