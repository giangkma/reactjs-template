import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyAU68ummnSHJyNW45t2kh42M_tGPVVtZ6U',
    authDomain: 'fir-start-ced4d.firebaseapp.com',
    databaseURL: 'https://fir-start-ced4d.firebaseio.com',
    projectId: 'fir-start-ced4d',
    storageBucket: 'fir-start-ced4d.appspot.com',
    messagingSenderId: '712178904450',
    appId: '1:712178904450:web:e8d00619caaff1ef26739b',
    measurementId: 'G-JZ0BF98Z7P',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const realtimeDatabase = firebase.database();
export const firestore = firebase.firestore();

// export const firebaseAppAuth = firebase.auth();
// export const providers = {
//     emailAuthProvider: new firebase.auth.EmailAuthProvider(),
// };
