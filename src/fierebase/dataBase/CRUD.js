import { db } from '../../configuracion/configuracion_firebase.js';

const controlador = {};

controlador.subirDocumento = (coleccion, documento) => {
	db.collection(coleccion)
		.add(documento)
		.then((docRef) => {
			console.log('Documentoagregado con ID: ', docRef.id);
		})
		.catch((error) => {
			console.error('Error al agregar el documento: ', error);
		});
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
	//console.log('valor p' , p);
};

export default controlador;
