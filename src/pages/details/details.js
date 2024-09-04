import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import img1 from "../../assets/images/fruit.jpg";
import img2 from "../../assets/images/fruit1.jpg";
import img3 from "../../assets/images/fruit2.jpg";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const DetailsPage = () => {

  //
  // const goto=(index)=>{}
    const [zoomImage, setZoomImage] = useState('https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-16-2.jpg');
    const [bigImageSize,setBigImage]= useState([1500,1500]);
    const [smlImageSize,setSmlImage]= useState([150,1500]);

    const [activeSize, setActiveSize] = useState(0);

  const zoomSlider = useRef(); 
    
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false, //slider slider automatic no need to tap  on slide button
    arrows: true,
  };

 const goto=(index)=>{
  alert(index)  //setZoom(url);
 }

 const isActive=(index)=>{
  setActiveSize(index);
 }

  return (
    <>
      <section className="detailsPage">
        <div className="breadcrumbWrapper">
          <div className="container-fluid">
            <ul className="breadcrumb breadcrumb2 mb-0">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link> Vegetables & tubers </Link>
              </li>
              <li>Seeds of Change Organic</li>
            </ul>
          </div>
        </div>

        <div className="container-fluid detailsContainer">
          <div className="row pt-3 pb-3">
            <div className="col-md-9 leftPart">
              <div className="row">
                {/* productZoom code start*/}
                <div className="col-md-5">
                  <div className="productZoom">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-16-2.jpg"
                    />
                  </div>

                  {/* 56:02 12 */}
                  <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                    <div className="item">
                      <img src={img1} className="w-100" onClick={()=>goto(0)}/>
                    </div>
                    <div className="item">
                      <img src={img2} className="w-100" onClick={()=>goto(1)}/>
                    </div>
                    <div className="item">
                      <img src={img3} className="w-100" onClick={()=>goto(2)}/>
                    </div>
                    <div className="item">
                      <img src={img1} className="w-100" onClick={()=>goto(3)}/>
                    </div>
                    <div className="item">
                      <img src={img1} className="w-100" onClick={()=>goto(4)}/>
                    </div>
                    <div className="item">
                      <img src={img2} className="w-100" onClick={()=>goto(5)}/>
                    </div>
                    <div className="item">
                      <img src={img3} className="w-100" onClick={()=>goto(6)}/>
                    </div>
                    <div className="item">
                      <img src={img1} className="w-100" onClick={()=>goto(7)} />
                    </div>
                  </Slider>
                </div>
                {/* productZoom code info*/}

                {/* productinfo code start*/}
                <div className="col-md-7 productInfo">
                  <h1 className="text-blue">
                    Seeds of Change <br />
                    Organic Quinoa, Brown
                  </h1>
                  <div className="d-flex align-items-center mb-4 mt-3">
                    <Rating name="read-only" value={4} readOnly />
                    <p>(32 reviews)</p>
                  </div>

                  <div className="priceSec d-flex align-items-center mb-3">
                    <span className="text-g priceLarge">$38</span>
                    <div className="ml-2 d-flex flex-column">
                      <span className="text-org">26% Off</span>
                      <span className="text-light">$52</span>
                    </div>
                  </div>
                  <p className="text-gray">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                    <br /> Aliquam rem officia, corrupti reiciendis minima nisi
                    modi, quasi,
                    <br /> odio minus dolore impedit fuga eum eligendi.
                  </p>

                  <br />

                  <div className="productSize d-flex align-items-center">
                        <span>Size / Weight:</span>
                        <ul className="list list-inline mb-0 pl-4">
                        <li className="list-inline-item"> <a className={`tag ${activeSize===0 ? 'active': ''}`}  onClick={()=>isActive(0)}>50g</a></li>
                        <li className="list-inline-item"> <a  className={`tag ${activeSize===1 ? 'active': ''}`}  onClick={()=>isActive(1)}>60g</a></li>
                        <li className="list-inline-item"> <a  className={`tag ${activeSize===2 ? 'active': ''}`}  onClick={()=>isActive(2)}>80g</a></li>
                        <li className="list-inline-item"> <a  className={`tag ${activeSize===3 ? 'active': ''}`}  onClick={()=>isActive(3)}>100g</a></li>
                        <li className="list-inline-item"> <a  className={`tag ${activeSize===4 ? 'active': ''}`}  onClick={()=>isActive(4)}>150g</a></li>
                        </ul> 
                  </div>


                  <div className="addCartSection pt-4 pb-4 d-flex align-items-center">
                      <div className="counterSec">
                        <input type="number" />
                        <span className="arrow plus ">< IoIosArrowUp></IoIosArrowUp></span>
                        <span className=" arrow minus"><IoIosArrowDown></IoIosArrowDown></span>
                      </div>
                  </div>
                </div>
                {/* productinfo code end*/}
              </div>
            </div>

            <div className="col-md-3 rightPart">

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
