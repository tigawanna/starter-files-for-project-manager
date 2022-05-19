import React from 'react'
import { GrHome } from "react-icons/gr";

import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
interface ToolbarProps {

}

export const Toolbar: React.FC<ToolbarProps> = () => {
return (
 <div className='w-full bg-slate-500 h-16'>
<IconContext.Provider value={{ size: "25px", className: "table-edit-icons" }} >
 <div className='flex flex-grow flex-3'>
     <div className='m-1 w-full p-3 bg-slate-800'>
     <Link to="/"><GrHome /></Link>
     </div>
     <div className='m-1 w-full p-3 bg-slate-600'>
     <Link to="/project">Project</Link>
     </div>
     <div className='m-1 w-fit p-3 bg-slate-700'><FaUserCircle/></div>

</div>   
</IconContext.Provider>
 </div>
);
}
