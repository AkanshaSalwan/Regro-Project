import React, { useState } from "react";
import "./style.css";
import Slider from "react-slick";

const CatSlider = () => {

  const [itemBg, setItemBg] = useState([
    '#fffceb',
    '#ecffec',
    '#feefea',
     '#fff3eb',
     '#fff3ff',
     '#f2fce4',
     '#feefea',
     '#fffceb',
     '#feefea',
     '#ecffec',
     '#feefea',
     '#fff3eb',
     '#fff3ff',
     '#f2fce4',
     '#feefea',
     '#fffceb',
     '#feefea',
     '#ecffec'         //some part remains
  ]);


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    fade: false, //slider slider automatic no need to tap  on slide button
    arrows:true,
    autoplay:2000,
    centerMode:true
  };
  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Featured Categories</h2>
         
          <Slider {...settings} className="cat_Slider_Main">
            {/* {
              itemBg.length!==0 && itemBg.map((item,index)=>{
                return(

                  
                <div className="item">
                  <div className="info" style={{background:item}}>
                   <img src="https://cdn-icons-png.flaticon.com/512/2682/2682446.png" alt="" />
                   <h5>Cakes </h5>
                   <p>26 items</p>
                  </div>
               </div>
               // https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-9.png
                )
              })
             } */}
      
             <div className="item">
               <div className="info">
                <img src= "https://cdn-icons-png.flaticon.com/512/2892/2892319.png" alt="" />
                <h5>Fruits</h5>
                <p>26 items</p>
               </div>
            </div> 
         
             <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/512/2805/2805945.png" alt="" />
                <h5>Vegetables </h5>
                <p>26 items</p>
               </div>
            </div> 
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/512/4774/4774389.png" alt="" />
                <h5>Milk&IceCream</h5>
                <p>26 items</p>
               </div>
            </div> 
            
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Chips & Crackers </h5>
                <p>26 items</p>
               </div>
            </div> 
             <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Soft Drinks </h5>
                <p>26 items</p>
               </div>
            </div>
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Health & Wellness </h5>
                <p>26 items</p>
               </div>
            </div>
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Child Care </h5>
                <p>26 items</p>
               </div>
            </div>
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Pet Food </h5>
                <p>26 items</p>
               </div>
            </div> 
             <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Instant Foods </h5>
                <p>26 items</p>
               </div>
            </div> 
           
           
           
        
          </Slider>
        </div>
      </div>
     
    </>
  );
};
export default CatSlider;
