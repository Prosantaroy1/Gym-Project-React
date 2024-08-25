import React, { useEffect } from 'react';
// aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarePage = ({img}) => {
    //
    useEffect(() => {
        AOS.init({ duration: "1500" });
    }, [])

    return (
        <div className='mt-36 container mx-auto grid bg-slate-50 items-center grid-cols-1 md:grid-cols-2'>
            {/* img part */}
            <div data-aos="zoom-in">
                <img src={img} alt="" />
            </div>
            {/* title part */}
            <div className='space-y-6 font-fontIbm'>
                <h3 className='text-7xl font-bold'>The Importants To Take Care Of Yourself</h3>
                <p className='text-2xl font-normal'>
                    The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.
                </p>
                <button className="btn btn-active text-xl hover:scale-110 btn-secondary">Explore More</button>
            </div>
        </div>
    );
};

export default CarePage;