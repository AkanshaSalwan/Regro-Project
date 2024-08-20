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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false, //slider slider automatic no need to tap  on slide button
    arrows:true
  };
  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Featured Categories</h2>
          <Slider {...settings} className="cat_Slider_Main">
            {
              itemBg.length!==0 && itemBg.map((item,index)=>{
                return(
                  <div className="item">
                  <div className="info" style={{background:item}}>
                   <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                   <h5>Cake & Milk </h5>
                   <p>26 items</p>
                  </div>
               </div>
                )
              })
            }
           
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div>
            {/* some part remains here */}
            {/* <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div>
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div>
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div>
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div> */}
            {/* <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div>
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div>
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div>
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div> */}
            {/* <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div>
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div>
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div> */}
            {/* <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div>
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div>
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div> */}
            {/* <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div>
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div>
            <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div> */}
            {/* <div className="item">
               <div className="info">
                <img src="https://cdn-icons-png.flaticon.com/128/878/878052.png" alt="" />
                <h5>Cake & Milk </h5>
                <p>26 items</p>
               </div>
            </div> */}
        
          </Slider>
        </div>
      </div>
      <br></br> <br /> <br /> <br />
    </>
  );
};
export default CatSlider;
