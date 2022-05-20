import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { Navigate} from 'react-router-dom';

export const signOutuser = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("succesfull sign out")
  
      })
    .catch((error) => {
      // An error happened.
      console.log("unsuccesfull sign out  ===  ",error)
    });
};
