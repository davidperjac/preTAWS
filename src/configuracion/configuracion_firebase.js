// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBhtgueuHzaA1k6Vwc6f-GnQ4U0gc63Dns',
	authDomain: 'pretaws6.firebaseapp.com',
	projectId: 'pretaws6',
	storageBucket: 'pretaws6.appspot.com',
	messagingSenderId: '350783653778',
	appId: '1:350783653778:web:887e16cdf2cf35b257a34b',
	measurementId: 'G-B8BJJ11ZE5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = firebase.firestore();
const storage = firebase.storage();

module.exports.db = db;
module.exports.storage = storage;
