import React from 'react';
import navMenu from '../../../data/nav/navLink';
import { NavLink } from 'react-router-dom';
import { GoX } from 'react-icons/go';

const Responsive = ({ toggol ,setToggol}) => {
    return (
        <div>
            {
                toggol && <div className='absolute bg-amber-400 top-0 left-0 w-full h-screen z-20'>
                    <ul className='flex items-center justify-center pt-20 flex-col gap-8 text-gray-600'>
                        {
                            navMenu.map((item) => {
                                return (
                                    <li key={item.id} className='text-3xl'>
                                        <NavLink to={item.link}>{item.title}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* cencel */}
                    <div onClick={()=>setToggol(!toggol)} className='absolute top-6 right-12'>
                        <GoX className='text-4xl'/>
                    </div>
                </div>
            }
        </div>
    );
};

export default Responsive;