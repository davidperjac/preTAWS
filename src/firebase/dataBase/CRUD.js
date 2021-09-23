import { db, storage } from '../../configuracion/configuracion_firebase.js';
import autenticacion from '../usuarios/autenticacion.js';
import firebase from '@firebase/app-compat';

import firebaseALT from 'firebase/compat';

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
controlador.subirDocumentosSinID = async (coleccion, documento) => {
	try {
		console.log(documento);
		const docRef = await db.collection(coleccion).doc();
		docRef.set({ ...documento });
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
			//console.log(doc.data());
			const paper = {
				id: doc.id,
				titulo: doc.data().titulo,
				autor: doc.data().autor,
				AreaEstudio: doc.data().AreaEstudio,
				fecha: doc.data().fecha,
				foto: doc.data().foto,
				descripcion: doc.data().descripcion,
				NumEstrellas: doc.data().NumEstrellas,
				tags: doc.data().tags,
				linkrepo: doc.data().linkrepo,
				linkpaper: doc.data().linkpaper,
			};
			papers.push(paper);
		});
		setData(papers);
	});
};

controlador.cargarUsuario = (uid, setData) => {
	const campoRef = db.collection('usuarios').where('id', '==', uid);
	campoRef
		.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				const res = doc.data();
				//console.log('res', res);
				setData(res);
			});
		})
		.catch((error) => {
			console.log('Error getting documents: ', error);
		});
};

controlador.bajarFoto = (nombrefoto, setUrl, ruta) => {
	// Create a reference to the file we want to download
	const storageRef = storage.ref(`imagenes/${ruta}/`);
	const starsRef = storageRef.child(nombrefoto);

	// Get the download URL
	starsRef
		.getDownloadURL()
		.then(function (url) {
			// Insert url into an <img> tag to "download"
			//console.log(url);
			setUrl(url);
		})
		.catch(function (error) {
			switch (error.code) {
				case 'storage/object-not-found':
					// File doesn't exist
					break;

				case 'storage/unauthorized':
					// User doesn't have permission to access the object
					break;

				case 'storage/canceled':
					// User canceled the upload
					break;

				case 'storage/unknown':
					// Unknown error occurred, inspect the server response
					break;
				default:
					console.log('');
			}
		});
};

controlador.subirFoto = (e, ruta) => {
	const file = e.target.files[0];

	const storageRef = storage.ref(`imagenes/${ruta}/`);
	// Create the file metadata
	const metadata = {
		contentType: 'image/jpeg',
	};

	// Upload file and metadata to the object 'images/mountains.jpg'
	const uploadTask = storageRef.child(file.name).put(file, metadata);

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
		}
	);
};
controlador.cambiarFoto = async (e) => {
	const file = e.target.files[0];
	const documento = autenticacion.sesionActiva();
	const userRef = await db.collection('usuarios').doc(documento); //doc(db, 'usuarios', autenticacion.sesionActiva());
	userRef
		.update({
			fotoPerfil: file.name,
		})
		.then(() => {
			console.log('Documento Actualizado correctamente');
		})
		.catch((error) => {
			console.log('Error: ', error);
		});
};

export default controlador;
