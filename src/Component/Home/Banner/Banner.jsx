import React from 'react';
import { SiGoogledisplayandvideo360 } from 'react-icons/si';
import bannerImg from '../../../assets/New folder/banner/dumbell-Bcy4gPfV.png'
import bannerImg2 from '../../../assets/New folder/banner/bg-BiCRh3MN.png'

const Banner = () => {
    return (

        <div className='bg-gradient-to-r from-[#ecdecf] 40% to-[#fff] to-60%'>
            <div className='container  mx-auto py-6 md:py-28 grid items-center grid-cols-1 md:grid-cols-2 '>
                {/* banner title */}
                <div className='font-fontIbm space-y-8'>
                    <h3 className='text-7xl font-bold leading-snug'>Gym Gives you the
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
                    <div>
                        <img src={bannerImg}  alt="" />
                    </div>
            </div>
            
        </div>
    );
};

export default Banner;