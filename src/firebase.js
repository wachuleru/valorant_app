// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import  "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANna_eG7LVbJdFrF621HhiZiO3HU_65qI",
  authDomain: "valorant-app-a24ce.firebaseapp.com",
  projectId: "valorant-app-a24ce",
  storageBucket: "valorant-app-a24ce.appspot.com",
  messagingSenderId: "56244205139",
  appId: "1:56244205139:web:fafaa2d6ba5aa781e1f8a6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebaseApp(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}