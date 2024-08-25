import React, { useEffect } from 'react';
// aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Discount = () => {
    useEffect(() => {
        AOS.init({ duration: "1500" });
    }, [])
    return (
        <div className='container mx-auto mt-10 rounded-lg bg-red-100 py-28 flex flex-col justify-center items-center'>
            <div className='space-y-7'>
                <h3 data-aos="fade-up" className='font-fontIbm text-center font-bold text-7xl text-black '>
                    Get 20% Discount On Your<br/> First Order, Are You Ready<br/> To Buy
                </h3>
                <p data-aos="fade-up" className='font-fontIbm text-center text-2xl font-medium'>
                    We will make sure you get the right and the best quality products for your workout
                </p>
                <div data-aos="fade-up" className='flex gap-6 items-center justify-center'>
                    <button className="bg-orange-400 rounded-lg text-white text-2xl p-5 btn-warning">Learn More</button>
                    <button className="border-2 border-orange-400  rounded-lg text-orange-400 text-2xl p-5 btn-warning">Stay In Touch</button>
                </div>
            </div>
        </div>
    );
};

export default Discount;