import React from "react";
import "./user.css";

import { FaGoogle } from "react-icons/fa";

import altuser from "../../user.png";
import { loginUser } from './../../utils/auth/loginUser';
import { UserState } from './../../utils/auth/types';
import { signOutuser } from './../../utils/auth/signOut';

interface UserProps {
  user: UserState | undefined;
}

export const User: React.FC<UserProps> = ({ user }) => {
  //  //console.log("is suer present  === ",user)
  if (!user?.uid) {
    return (
      <div className="user-container">
        <div className="user-login" onClick={() => loginUser()}>
          <FaGoogle />
          <div className="user-login-text">Login</div>
        </div>
      </div>
    );
  }
  return (
    <div className="user-container">
      <div
        className="user-logout"
        onClick={() => {
          signOutuser();
        }}
      >
        <img src={user.photoURL} alt={altuser} />
      </div>
    </div>
  );
};
