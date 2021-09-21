import { auth } from '../../configuracion/configuracion_firebase';
import controlador from '../dataBase/CRUD';

const autenticacion = {};

autenticacion.crearUsuario = async (correo , contrasena , nombre , usuario) => {
    try{
        const userCredential = await auth.createUserWithEmailAndPassword(correo, contrasena)
        const id = userCredential.user.uid;
        console.log("id usuario: " ,id);
        const user = {
			id : id,
            nombre: nombre,
            usuario: usuario,
            correo: correo,
            contrasena: contrasena,
            fotoPerfil: ''
        }
        const value = controlador.subirDocumento('usuarios' , user , id)

		if(value){
			console.log('Usuario creado');
			return true
		}
        console.log('Usuario no registrado en la base de datos');
        return false;
    }catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Codigo de error : ' , errorCode);
        console.error('Mensaje de error: ' , errorMessage);
        return false
    }
    /*

    auth.createUserWithEmailAndPassword(correo, contrasena)
    .then((userCredential) => {
        //const user = userCredential.user;
        console.log('Usuario creado');
        return true
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Codigo de error : ' , errorCode);
        console.error('Mensaje de error: ' , errorMessage);
        return false
    });
    */
};

autenticacion.accederUsuario = async (correo, contrasena) => {
	try {
		const sesion = await auth.signInWithEmailAndPassword(correo, contrasena);
		//const user = sesion.user;
		//const id = user;
		console.log('Usuario logeado correctamente');
		return true;
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log('Codigo de error : ', errorCode);
		console.log('Mensaje de error: ', errorMessage);
		return false;
	}
	/*.then((userCredential) => {

            const user = userCredential.user;
            const id = user;
            console.log('Usuario logeado correctamente');
            return true
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Codigo de error : ' , errorCode);
            console.log('Mensaje de error: ' , errorMessage);
            return false
        });*/
};

autenticacion.cerrarSesion = () => {
	auth
		.signOut()
		.then(() => {
			console.log('Secion de usuario cerrada con exito');
		})
		.catch((error) => {
			console.log();
		});
};

autenticacion.actualizarPerfilUsuario = ({ nombre, usaurio }) => {
	const user = auth.currentUser;

	if (user !== null) {
		user
			.updateProfile({
				nombre: nombre,
				usaurio: usaurio,
			})
			.then(() => {})
			.catch((error) => {
				console.log('Error');
			});
	} else {
	}
};

autenticacion.sesionActiva = () => {
	const user = auth.currentUser;
	if (user !== null) {
		const id = user.uid;
		return id;
	} else {
		return null;
	}
};

export default autenticacion;
