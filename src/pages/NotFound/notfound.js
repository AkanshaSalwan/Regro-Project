import React from 'react';
import './notfound.css';
import  Img404 from '../../assets/images/404-error.avif';

const NotFound = () => {
  return (
    <>
       <section className='notFound'>
         <div className='container-fluid'>
          <img src={Img404} />
         </div>
       </section>
    </>
  )
}

export default NotFound;