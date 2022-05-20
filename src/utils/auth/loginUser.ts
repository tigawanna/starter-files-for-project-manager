import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth} from "../../firebase/firebaseConfig";

const provider = new GoogleAuthProvider();
provider.addScope('https://mail.google.com/');
export const loginUser= () => {
signInWithRedirect(auth, provider)
.then((result:any) => {
console.log("sign in successful result  === ",result)
// The signed-in user info.
    const user = result.user;
  }).catch((error) => {
// Handle Errors here.
console.log("sign in error  === ",error)

 });



}

// export const loginUser=()=>{
//     signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential?.accessToken;

//     console.log("sign in successful result  === ",result)
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...

//     console.log("sign in error  === ",error)
//   })
// }
