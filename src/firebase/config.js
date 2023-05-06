import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwY8Mx2BQ_9gDpb6meiwwSN2nszmi1uUY",
  authDomain: "back-my-projec.firebaseapp.com",
  projectId: "back-my-projec",
  storageBucket: "back-my-projec.appspot.com",
  messagingSenderId: "190490231664",
  appId: "1:190490231664:web:8089dde43f1f3fcda685b5"
};

// Inicializamos la app

const app = firebase.initializeApp(firebaseConfig)

// Con esta funcion podemos consumir en distintos componentes toda la información que establecimos en nuestra base de datos

export const getFirestore = () =>{
    return firebase.firestore(app)
}