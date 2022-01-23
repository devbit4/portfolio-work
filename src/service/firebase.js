import firebase from 'firebase';
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDyELXXMDfjz2cR2yN3_Q32sQOuj54KW5Y",
    authDomain: "portfolio-6327e.firebaseapp.com",
    projectId: "portfolio-6327e"
    // appId: "1:927965447454:web:d41c316c5fc303ca21750f",

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;