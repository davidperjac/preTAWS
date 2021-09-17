import { auth } from "../../configuracion/configuracion_firebase";


const autenticacion = {}

autenticacion.crearUsuario = (correo , contrasena) => {
  auth.createUserWithEmailAndPassword(correo, contrasena)
    .then((userCredential) => {
        const user = userCredential.user;
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
}

autenticacion.accederUsuario = (correo , contrasena) => {
    auth.signInWithEmailAndPassword(correo , contrasena)
        .then((userCredential) => {
            const user = userCredential.user;
            const id = user.uid;
            console.log('Usuario creado');
            return id
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Codigo de error : ' , errorCode);
            console.error('Mensaje de error: ' , errorMessage);
            return null
        });
}

autenticacion.cerrarSesion = () => {
    auth.signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}

autenticacion.actualizarPerfilUsuario = ({nombre , usaurio}) => {
    const user = auth.currentUser;

    if (user !== null) {
        user.updateProfile( {
            nombre  :   nombre,
            usaurio :   usaurio
        }).then(() => {

        }).catch((error) => {
            console.log("Error");
        });
    } else {
    }    
}

autenticacion.sesionActiva = () => {
    const user = auth.currentUser;
    if( user !== null){
        const id = user.uid;
        return id
    }else { 
        return null
    }
}

export default autenticacion