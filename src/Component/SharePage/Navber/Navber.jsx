import React from 'react';
import navMenu from "../../../data/nav/navLink"
import { NavLink } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5';


const Navber = () => {
    return (
        <div className=' absolute top-0 left-0 w-full'>
            <nav className='container  font-fontIbm justify-between py-10 mx-auto items-center flex px-3 md:px-0'>
                {/* nav logo */}
                <div>
                    <h3 className='lg:text-5xl text-3xl font-bold'>Brother <span className='text-rose-600'>GYM</span></h3>
                </div>
                {/* nav menu link */}
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-8 text-gray-600'>
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
                </div>
                {/* nav btn */}
                <div className='flex items-center gap-5'>
                    <div className='hover:bg-rose-600 hover:text-white rounded-full p-2 text-2xl'>
                        <IoSearch />
                    </div>
                    <div className='hover:bg-rose-600 hover:text-white rounded-full p-2 text-2xl'><BsCart3 /></div>
                    <div>
                        <button className='px-3 py-2 hover:bg-rose-600 hover:text-white text-3xl font-semibold border rounded border-rose-600 text-rose-600'>Login</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;