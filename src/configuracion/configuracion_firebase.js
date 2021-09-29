import firebase from 'firebase/compat';
// TODO: Add SDKs for Firebase products that you want to use

const app = firebase.initializeApp({
	apiKey: 'AIzaSyBhtgueuHzaA1k6Vwc6f-GnQ4U0gc63Dns',
	authDomain: 'pretaws6.firebaseapp.com',
	projectId: 'pretaws6',
	storageBucket: 'pretaws6.appspot.com',
	messagingSenderId: '350783653778',
	appId: '1:350783653778:web:887e16cdf2cf35b257a34b',
	measurementId: 'G-B8BJJ11ZE5',
});

// Initialize Firebase
export const auth = app.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default app;
