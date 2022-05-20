import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { UserState } from "./types";

export const useIfAuthed = () => {
  const [user, setUser] = useState<UserState>();
  useEffect(() => {
    const check = onAuthStateChanged(auth, (user: any) => {
      // no("user data ===== ", user);
      const neededUser: UserState = {
        displayName: user?.displayName,
        email: user?.email,
        uid: user?.uid,
        photoURL: user?.photoURL,
      };
      setUser(neededUser);
    });

    return () => {
      check();
    };
  }, []);

  return user;
};
