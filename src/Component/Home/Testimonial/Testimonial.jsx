import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import imgMan from '../../../assets/New folder/card/man.webp'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import testimonial from '../../../data/testimonial/testimonial';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div className='container font-fontIbm mx-auto pt-20'>
            <h3 className='text-5xl text-black font-semibold'>
                What Are The Costumer<br /> Saying About Us
            </h3>
            {/* card */}
            <div className='pt-12'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        testimonial.map(item=>{
                          return  <SwiperSlide key={item.id}>
                            {/* style */}
                            <div className="card w-full font-fontIbm bg-slate-100 py-10 hover:shadow-lg hover:bg-green-200 shadow-xl">
                                <div className="card-body">
                                    <div className='flex items-center gap-6'>
                                        <div>
                                            <img src={item.img} className='w-20 rounded-full'/>
                                        </div>
                                        <div>
                                            <h3 className='font-fontIbm text-2xl font-semibold'>{item.name}</h3>
                                            <h5 className='text-xl'>Bangladesh</h5>
                                        </div>
                                    </div>
                                    <p className='font-fontIbm font-normal text-xl pt-4'>
                                       {item.text}
                                    </p>
                                    <ul className='flex items-center gap-2 pt-3'>
                                        <li className='text-2xl text-amber-400'><FaStar /></li>
                                        <li className='text-2xl text-amber-400'><FaStar /></li>
                                        <li className='text-2xl text-amber-400'><FaStar /></li>
                                        <li className='text-2xl text-amber-400'><FaStar /></li>
                                        <li className='text-2xl text-amber-400'><FaStar /></li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        })
                    }
                   
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;