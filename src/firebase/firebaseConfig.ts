
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider,getAuth} from "firebase/auth";
// import { connectAuthEmulator } from "firebase/auth";
// import {connectFirestoreEmulator} from "firebase/firestore"

const firebaseConfig = {

  };

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
export const db = getFirestore();
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app)

// connectFirestoreEmulator(db, '192.168.0.109', 8080);
// connectAuthEmulator(auth, "http://localhost:9099");
