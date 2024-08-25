import React from 'react';
import Banner from '../Banner/Banner';
import Equipment from '../Equipment/Equipment';
import CareImg from '../../../assets/New folder/careImg/2-D6fIL54y.png'
import CareImg2 from '../../../assets/New folder/careImg/2-GA8HnIcz.png'
import CarePage from '../CarePage/CarePage';
import Testimonial from '../Testimonial/Testimonial';
import Discount from '../Discount/Discount';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Equipment/>
            <CarePage img={CareImg}/>
             <Product/>
             <CarePage img={CareImg2}/>
            <Testimonial/>
            <Discount/>
        </div>
    );
};

export default Home;