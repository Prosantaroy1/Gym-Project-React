import React, { useEffect } from 'react';
import { SiGoogledisplayandvideo360 } from 'react-icons/si';
import bannerImg from '../../../assets/New folder/banner/dumbell-Bcy4gPfV.png'
// // aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {
    // 
    useEffect(() => {
        AOS.init({ duration: "1000" });
    }, [])

    return (

        <div className='bg-gradient-to-r from-[#ecdecf] 40% to-[#fff] to-60% py-24'>
            <div className='container ld:gap-2 gap-24  mx-auto py-12 md:py-28 grid  items-center grid-cols-1 md:grid-cols-2 '>
                {/* banner title */}
                <div className='font-fontIbm space-y-8' data-aos="fade-right">
                    <h3 className='lg:text-7xl  text-4xl font-bold leading-snug'>Gym Gives you the
                        <br />perfect<span className='text-rose-600'> Health</span>
                    </h3>
                    <p className='font-semibold text-[#36424d]  text-2xl '>
                        It is a long established fact that a reader will be by readable content of a page when are the best product.
                    </p>
                    {/* banner btn */}
                    <div className='flex items-center gap-4'>
                        <div>
                            <button className="btn btn-outline text-2xl btn-secondary">Oder now</button>
                        </div>
                        <div className='flex items-center gap-3'>
                            <SiGoogledisplayandvideo360 />
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="text-2xl font-semibold" onClick={() => document.getElementById('my_modal_2').showModal()}>watch Now</button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box">
                                    {/* video */}
                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/eoD0CFFgphA?si=kgUxm12pm61RGvAK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                    </div>
                </div>
                {/* banner img */}
                <div data-aos="fade-left">
                    <img src={bannerImg} alt="" className='w-full'/>
                </div>
            </div>

        </div>
        
    )
};

export default Banner;