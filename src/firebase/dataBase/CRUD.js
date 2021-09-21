import { db } from '../../configuracion/configuracion_firebase.js';
import { collection, addDoc } from 'firebase/firestore';

const controlador = {};

controlador.subirDocumento = (coleccion, documento , idDoc) => {
	db.collection(coleccion).doc(idDoc).set(documento)
		.then((docRef) => {
			console.log('Documento agregado con ID: ', docRef.id);
			return true;
		})
		.catch((error) => {
			console.error('Error al agregar el documento: ', error);
			return false;
		});
};

//controlador.registrarUsuarios = 

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
	//console.log('valor p' , p);
};

export default controlador;
