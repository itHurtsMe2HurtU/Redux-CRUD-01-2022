// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTFiU3rwoie6aYGf-dOIKPvqrMX_zRq8Y",
    authDomain: "reduxcrud2022.firebaseapp.com",
    projectId: "reduxcrud2022",
    storageBucket: "reduxcrud2022.appspot.com",
    messagingSenderId: "782366958939",
    appId: "1:782366958939:web:db047e594f368fecfc667e",
    measurementId: "G-HPMBZLC2VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);