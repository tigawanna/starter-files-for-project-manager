
import { useAuthUser } from '@react-query-firebase/auth';
import React from 'react'
import { Navigate } from 'react-router-dom';
import { auth } from './../../firebase/firebaseConfig';
import { BrowserRouter, useNavigate } from 'react-router-dom';


interface HomeProps {

}

export const Home: React.FC<HomeProps> = () => {
;
 
 
return (
<div className='w-full h-full bg-slate-400'>
 Home

 </div>
);
}
