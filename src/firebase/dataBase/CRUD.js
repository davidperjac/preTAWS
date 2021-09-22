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
		setData(papers);
	});
};

controlador.cargarUsuario = (setData) => {
	db.collection('usuarios').onSnapshot((querySnapshot) => {
		let users = [];
		querySnapshot.forEach((doc) => {
			//console.log(doc.data());
			const user = {
				id: doc.id,
				nombre: doc.data().nombre,
				usuario: doc.data().usuario,
				correo: doc.data().correo,
				contrasena: doc.data().contrasena,
			};
			users.push(user);
		});
		//console.log(users);
		users.forEach((user) => {
			if (user.id === autenticacion.sesionActiva()) {
				setData(user);
			}
		});
	});
	/*
	const documento = autenticacion.sesionActiva();
	console.log('Usuario actuar', documento);
	db.collection('usuarios')
		.doc(documento)
		.onSnapshot((doc) => {
			console.log('datos: ', doc.data);
			setData(doc.data());
		});
	*/
};

/*
	var citiesRef = db.collection('cities');

	var query = citiesRef.where('capital', '==', true);

	db.collection("cities").where("capital", "==", true)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
test.firestore.js

*/

controlador.recuperarDoc = async (coleccion, campo) => {
	/*
			async () => {
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
		}
	*/
	const campoRef = await db
		.collection(coleccion)
		.where(campo, '==', 'ZxA6rFJyWDaHz9KFSabvnlqOEod2');
	campoRef //autenticacion.sesionActiva())
		.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				//console.log(doc.id, ' => ', doc.data());
				const res = doc.data().fotoPerfil;
				console.log(res);
				return res;
			});
		})
		.catch((error) => {
			console.log('Error getting documents: ', error);
		});
};

controlador.bajarFoto = (nombrefoto) => {
	// Create a reference to the file we want to download
	const storageRef = storage.ref('imagenes/usuario');
	const starsRef = storageRef.child(nombrefoto);

	// Get the download URL
	starsRef
		.getDownloadURL()
		.then(function (url) {
			// Insert url into an <img> tag to "download"
			return url;
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
					console.log(error);
			}
		});
};

controlador.subirFoto = (e) => {
	const file = e.target.files[0];

	const storageRef = storage.ref('imagenes/usuario');
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
		},
		async () => {
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
		}
	);
};

export default controlador;
