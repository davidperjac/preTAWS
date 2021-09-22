import { db, storage } from '../../configuracion/configuracion_firebase.js';
import { doc, updateDoc } from 'firebase/firestore';
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
	/*db.collection(coleccion).doc(idDoc).set(documento)
		.then((docRef) => {
			console.log('Documento agregado con ID: ', docRef.id);
			return true;
		})
		.catch((error) => {
			console.error('Error al agregar el documento: ', error);
			return false;
		});*/
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

/*
const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});
*/

controlador.cargarUsuario = (setData) => {
	db.collection('usuarios').onSnapshot((querySnapshot) => {
		let users = [];
		querySnapshot.forEach((doc) => {
			const user = {
				id: doc.id,
				nombre: doc.data().nombre,
				usuario: doc.data().usuario,
				correo: doc.data().correo,
				contrasena: doc.data().contrasena,
			};
			users.push(user);
		});
		users.forEach((user) => {
			if (user.id === autenticacion.sesionActiva()) {
				setData(user);
			}
		});
		//const q = query(collection(db, 'usuarios'), where('capital', '==', true));
		//setData(users);
	});
};

controlador.subirFoto = (e) => {
	const file = e.target.files[0];

	// Create the file metadata
	const metadata = {
		contentType: 'image/jpeg',
	};

	// Upload file and metadata to the object 'images/mountains.jpg'
	const uploadTask = firebase
		.storage()
		.ref('images')
		.child(file.name)
		.put(file, metadata);

	uploadTask.on(
		firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
		function (snapshot) {
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
		function (error) {
			switch (error.code) {
				case 'storage/unauthorized':
					// User doesn't have permission to access the object
					break;

				case 'storage/canceled':
					// User canceled the upload
					break;

				case 'storage/unknown':
					// Unknown error occurred, inspect error.serverResponse
					break;
				default:
					console.log('');
			}
		},
		function () {
			uploadTask.snapshot.ref
				.getDownloadURL()
				.then(async function (downloadURL) {
					console.log('File available at', downloadURL);
					const userRef = doc(db, 'usuarios', autenticacion.sesionActiva());
					await updateDoc(userRef, {
						fotoPerfil: file.name,
					});
				});
		}
	);
};

export default controlador;
