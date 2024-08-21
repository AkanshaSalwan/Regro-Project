import React from 'react';
// import Banner1 from '../../assets/images/banner-1.png';
// import Banner2 from '../../assets/images/banner-2.png';
// import Banner3 from '../../assets/images/banner-3.png';
import './style.css';
import ban1 from '../../assets/images/ban1.png';
import ban2 from '../../assets/images/ban2.png'
import ban3 from '../../assets/images/ban3.png'

const Banners = () => {
  return (
   <>
  <div className='bannerSection'>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col'>
               <div className='box'>
                 <img src={ban1} className='w-100 transition' />
               </div>
            </div>

            <div className='col'>
               <div className='box'>
                 <img src={ban2} className='w-100 transition' />
               </div>
            </div>

            <div className='col'>
               <div className='box'>
                 <img src={ban3} className='w-100 transition' />
               </div>
            </div>
        </div>
    </div>
  </div>
   </>
  )
}

export default Banners;