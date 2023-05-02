// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Importamos el metodo para obtener la base de datos de FireBase
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxCtCrdsSLKOdnNcylhh1zIFSegnYt7n4",
  authDomain: "mi-universo-astral.firebaseapp.com",
  projectId: "mi-universo-astral",
  storageBucket: "mi-universo-astral.appspot.com",
  messagingSenderId: "796735119818",
  appId: "1:796735119818:web:38edd32abf3cabdf58af33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Obtenemos la base de datos y la importo en cada elemento que la necesito.
export const db = getFirestore(app);
