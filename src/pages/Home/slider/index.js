import React from 'react';
import Slider from "react-slick";
import './index.css';

import Slide1 from '../../../assets/images/slider-1.png';
import Slide2 from '../../../assets/images/slider-2.png';
// import '../../../../node_modules/react-slick';
import Button from '@mui/material/Button';


const HomeSlider =()=>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true, //slider slider automatic no need to tap  on slide button
      //   arrows:true
      };

//       <i class="fa fa-angle-left" aria-hidden="true"></i>  issue in 24:26 #4
// <i class="fa fa-angle-right" aria-hidden="true"></i>
    return(
        <> 
        <section className='homeSlider'>
        {/* <i class="fa fa-angle-left" aria-hidden="true"></i> 
        <i class="fa fa-angle-right" aria-hidden="true"></i> */}
         <div className='container-fluid position-relative'>
            <Slider {...settings} className='home_Slider_main'>
               <div className='item'>
                 <img src={Slide1} className='w-100'/>
                 <div className='info'>
                   <h2 className='mb-4'>
                     Dont't miss amazing <br></br>grocery deals
                   </h2>
                   <p>Sign up or the daily newsletter</p>
                 </div>
              </div>
              <div className='item'>
                 <img src={Slide2} className='w-100'/>
                  <div className='info'>
                   <h2 className='mb-4'>
                    Fresh Vegetables<br></br>Big discount
                   </h2>
                   <p>Save up to 50% off on your First order</p>
                 </div>
              </div>
            </Slider>

            <div className='newsLetterBanner'>
              <input type="text" placeholder='your email address..' />
              <Button className='bg-g'>Subscribe</Button>
            </div>
         </div>
        </section>
        <Slider></Slider>
        </>
    )  
}

export default HomeSlider;