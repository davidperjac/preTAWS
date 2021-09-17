import {db} from '../../configuracion/configuracion_firebase.js';

const controlador = {};

controlador.subirDocumento = (coleccion , documento ) => {
    db.collection(coleccion).add(documento)
        .then((docRef) => {
            console.log("Documentoagregado con ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error al agregar el documento: " , error);
        })
}

controlador.cargarDocumento = (coleccion , correo) => {
    db.collection(coleccion).where('correo', '==' , correo )
        .onSnapshot((querySnapshot) => {
            let usuario = {
                usuario: '', 
                nombre: '',
                correo: '',
                contrasena: '',
                paper : []
            }
            querySnapshot.forEach((doc) => {
                usuario.usuario     = doc.data().usuario;
                usuario.nombre      = doc.data().nombre;
                usuario.correo      = doc.data().correo;
                usuario.contrasena  = doc.data().contrasena;
                usuario.paper       = doc.data().paper;
            });
        })
}