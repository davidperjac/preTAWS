import { db, storage } from '../../configuracion/configuracion_firebase.js';
import autenticacion from '../usuarios/autenticacion.js';
import firebase from '@firebase/app-compat';

const controlador = {};

controlador.subirDocumento = async (coleccion, documento, idDoc) => {
	try {
		console.log(documento);
		const docRef = await db.collection(coleccion).doc(idDoc);
		docRef.set(documento);
		console.log('Documento agregado con ID: ', docRef);
		return true;
	} catch (error) {
		console.error('Error al agregar el documento: ', error);
		return false;
	}
};

controlador.cargarPaper = (setData) => {
	db.collection('papers').onSnapshot((querySnapshot) => {
		let papers = [];
		querySnapshot.forEach((doc) => {
			console.log(doc.data());
			const paper = {
				id: doc.id,
				titulo: doc.data().titulo,
				Autor: doc.data().titulo,
				AreaEstudio: doc.data().AreaEstudio,
				fecha: doc.data().fecha,
				descripcion: doc.data().descripcion,
				NumEstrellas: doc.data().NumEstrellas,
				tags: doc.data().tags,
				gitHub: doc.data().gitHub,
			};
			papers.push(paper);
		});
		console.log(papers.length);
		setData(papers);
	});
};

controlador.cargarUsuario = async (setData) => {
	const documento = await autenticacion.sesionActiva();
	console.log('Usuario actuar', documento);
	try {
		const value = await db.collection('usuarios').doc(documento).get();
		const datos = value.data();
		console.log('datos: ', datos);
		if(datos === undefined){
			setData({
				nombre:'',
				usuario:'',
				correo: '',
				contrasena: ''
			});
		}else{
			setData(datos);
		}
	}catch(error){
		console.error('Error : ' , error);
	}
/*	const value = await db.collection('usuarios').doc(documento).get()
	then((doc) => {
		const datos = doc.data();
		console.log('datos: ', datos);
		if(datos === undefined){
			setData({
				nombre:'',
				usuario:'',
				correo: '',
				contrasena: ''
			});
		}else{
			setData(doc.data());
		}
	}).catch((error) => {
		console.error('Error : ' , error);
	});*/
};

controlador.subirFoto = (e) => {
	const file = e.target.files[0];

	const storageRef = storage.ref('imagenes/usuario');
	// Create the file metadata
	const metadata = {
		contentType: 'image/jpeg',
	};

	// Upload file and metadata to the object 'images/mountains.jpg'
	const uploadTask = storageRef
		.child(file.name)
		.put(file, metadata);

	uploadTask.on(
		firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
		(snapshot) => {
			var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			console.log('Upload is ' + progress + '% done');
			switch (snapshot.state) {
				case firebase.storage.TaskState.PAUSED: // or 'paused'
					console.log('Upload is paused');
					break;
				case firebase.storage.TaskState.RUNNING: // or 'running'
					console.log('Upload is running');
					break;
				default:
					console.log('');
			}
		},
		 (error) => {
			switch (error.code) {
				case 'storage/unauthorized':
					console.log('El usuario no tiene permiso de acceso');
					// User doesn't have permission to access the object
					break;

				case 'storage/canceled':
					console.log('el usaurio cancelo la carga');
					// User canceled the upload
					break;

				case 'storage/unknown':
					console.log('error:', error.serverResponse);
					// Unknown error occurred, inspect error.serverResponse
					break;
				default:
					console.log('');
			}
		},
		async () =>{
			const documento = await autenticacion.sesionActiva(); 
			const userRef = await db.collection('usuarios').doc(documento);//doc(db, 'usuarios', autenticacion.sesionActiva());
			userRef.update({
				"fotoPerfil": file.name,
			}).then(() => {
				console.log('Documento Actualizado correctamente');
			}).catch((error) => {
				console.log('Error: ' , error);
			})
		}
	);
};

export default controlador;
