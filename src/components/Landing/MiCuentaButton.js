import React from 'react';
import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';
import {
	MI_CUENTA_CLICK,
	onClick_MiCuenta,
} from '../../redux/actions/OpcionesUsuarioAction';

export const MiCuentaButton = (props) => {
	return (
		<div>
			<Button
				variant="contained"
				startIcon={<AccountCircleIcon />}
				className={props.color}
				onClick={() => props.onClick_MiCuenta(MI_CUENTA_CLICK)}
			>
				MI CUENTA
			</Button>
		</div>
	);
};

const mapDispatchToProps = {
	onClick_MiCuenta,
};

export default connect(null, mapDispatchToProps)(MiCuentaButton);
