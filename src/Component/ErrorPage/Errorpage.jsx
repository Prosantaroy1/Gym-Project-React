import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    return (
       <div className='bg-gradient-to-t from-orange-400 to-lime-400'>
         <div className='flex flex-col items-center justify-center h-screen space-y-4'>
             <h3 className='font-serif text-2xl font-bold'>SomeThing Wrong ! Cheek Please</h3>
             <button className="btn btn-accent">
                <NavLink to='/'>Go To Back Home</NavLink>
             </button>
        </div>
       </div>
    );
};

export default Errorpage;