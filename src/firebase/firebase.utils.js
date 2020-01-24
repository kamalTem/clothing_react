import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCKQ4_v6e_GTzi8phVyu91vro49VF_VhxE",
    authDomain: "crwn-db-60b99.firebaseapp.com",
    databaseURL: "https://crwn-db-60b99.firebaseio.com",
    projectId: "crwn-db-60b99",
    storageBucket: "crwn-db-60b99.appspot.com",
    messagingSenderId: "1036194486789",
    appId: "1:1036194486789:web:6e6b617bf540c058865a6c",
    measurementId: "G-8L3SC2FJYM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;