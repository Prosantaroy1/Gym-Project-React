import React from 'react';
import navMenu from "../../../data/nav/navLink"
import { NavLink } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5';


const Navber = () => {
    return (
        <div className='bg-orange-100 sticky top-0 left-0 w-100%'>
            <nav className='container font-fontIbm justify-between py-4 mx-auto items-center flex px-3 md:px-0'>
                {/* nav logo */}
                <div>
                    <h3 className='text-2xl  font-bold'>Brother <span className='text-rose-600'>GYM</span></h3>
                </div>
                {/* nav menu link */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-6 text-gray-600'>
                        {
                            navMenu.map((item) => {
                                return (
                                    <li key={item.id} className='text-xl'>
                                        <NavLink to={item.link}>{item.title}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* nav btn */}
                <div className='flex items-center gap-5'>
                    <div className='hover:bg-rose-600 hover:text-white rounded-full p-2 text-xl'>
                        <IoSearch />
                    </div>
                    <div className='hover:bg-rose-600 hover:text-white rounded-full p-2 text-xl'><BsCart3 /></div>
                    <div>
                        <button className='px-3 py-2 hover:bg-rose-600 hover:text-white text-xl font-semibold border rounded border-rose-600 text-rose-600'>Login</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;