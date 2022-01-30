import firebase from 'firebase';
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
    // appId: "1:927965447454:web:d41c316c5fc303ca21750f",

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;