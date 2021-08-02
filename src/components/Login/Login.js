import React from 'react';
import Button from '@material-ui/core/Button'

const Login = ({color}) => {

    return (
        <div>
            <Button variant="contened" color="default" className={color}>
              INCIAR SESION
            </Button>
        </div>
    );
}

export default Login;