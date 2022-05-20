
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider,getAuth} from "firebase/auth";
import { connectAuthEmulator } from "firebase/auth";
import {connectFirestoreEmulator} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAfscLOXmlCazzFVH9TbJsk4QWKplg9b20",
    authDomain: "netninjaprojects.firebaseapp.com",
    databaseURL: "https://netninjaprojects-default-rtdb.firebaseio.com",
    projectId: "netninjaprojects",
    storageBucket: "netninjaprojects.appspot.com",
    messagingSenderId: "750697663872",
    appId: "1:750697663872:web:daba81e681f92cb0050565"
  };

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const db = getFirestore();
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app)

connectFirestoreEmulator(db, '192.168.0.109', 8080);
connectAuthEmulator(auth, "http://localhost:9099");
