import React from "react";
import "./login.css";
import { Navigate} from 'react-router-dom';
import { UserState } from './../../utils/auth/types';
import { loginUser } from './../../utils/auth/loginUser';
import {FaGoogle} from 'react-icons/fa'
import { IconContext } from "react-icons";



interface LoginProps {
user:UserState|undefined
}


export const Login: React.FC<LoginProps> = ({user}) => {

  if(user){
  return <Navigate to='/' replace />
  }
  return (

    <div className="w-full h-full flex justify-center items-center">
      <IconContext.Provider value={{ size: "25px", className: "table-edit-icons" }} >
      <div className=" p-5">
        <button className="p-5 flex bg-slate-700 hover:bg-slate-800 rounded-sm " onClick={() => loginUser()}>
        <FaGoogle/> <div className="mx-2 text-xl"> Login with Google</div> 
        </button>

      </div>
      </IconContext.Provider>
    </div>
  );
};
