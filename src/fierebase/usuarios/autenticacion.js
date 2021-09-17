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

autenticacion.accederUsuario = () => {

}

autenticacion.cerrarSesion = () => {
    auth.signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}

autenticacion.perfilUsuario = ({nombre , usaurio}) => {
    const user = auth().currentUser;

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

export default autenticacion