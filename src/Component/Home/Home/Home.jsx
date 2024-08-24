import React from 'react';
import Banner from '../Banner/Banner';
import Equipment from '../Equipment/Equipment';
import CareImg from '../../../assets/New folder/careImg/2-D6fIL54y.png'
import CarePage from '../CarePage/CarePage';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Equipment/>
            <CarePage img={CareImg}/>
            <Testimonial/>
        </div>
    );
};

export default Home;