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
import { Button } from "@mui/material";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { PiShuffleFill } from "react-icons/pi";
import Sidebar from "../../component/Sidebar/sidebar";

const DetailsPage = () => {
  
  // const goto=(index)=>{}
  const [zoomImage, setZoomImage] = useState('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg');
 
  const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
  const [smlImageSize, setSmlImageSize] = useState([150, 1500]);

  const zoomSlider=useRef();
  const zoomSliderBig=useRef();


 



 

  const [activeSize, setActiveSize] = useState(0);

  const [inputValue, setinputValue] = useState(1);

 

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false, //slider slider automatic no need to tap  on slide button
    arrows: false,
   
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false, //slider slider automatic no need to tap  on slide button
    arrows: true,
  };

  const goto=(url, index)=>{
    setTimeout(()=>{
      setZoomImage(url);
    },200)
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };

  const isActive = (index) => {
    setActiveSize(index);
  };

  const plus = () => {
    setinputValue(inputValue + 1);
  };
  const minus = () => {
    if (inputValue !== 1) {
      setinputValue(inputValue - 1);
    }
  };

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

        <div className="container detailsContainer">
          <div className="row">
            {/* productZoom code start*/}
            <div className="col-md-5">
              <div className="productZoom">
              <Slider {...settings2 } className="zoomSliderBig" ref={zoomSliderBig}>
                  <div className="item">
                  <InnerImageZoom
                  zoomType="hover"
                  zoomScale={1}
                  src={`${zoomImage}?im=Resize=(${bigImageSize[0]}, ${bigImageSize[1]})`} />
                  </div>
              </Slider>
              </div>

              {/* 56:02 12 */}
              <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
              <div className="item">
                  <img
                   src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${smlImageSize[0]}, ${smlImageSize[1]})`}
                    className="w-100"
                    onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg',0)}
                  />
                </div>
                <div className="item">
                  <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${smlImageSize[0]}, ${smlImageSize[1]})`}
                  className="w-100" onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg',1)} />
                </div>
                
                <div className="item">
                  <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${smlImageSize[0]}, ${smlImageSize[1]})`} 
                  className="w-100" onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg',2)} />
                </div>

                <div className="item">
                  <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize(${smlImageSize[0]}, ${smlImageSize[1]})`}
                   className="w-100" onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg',3)} />
                </div>

                <div className="item">
                  <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${smlImageSize[0]}, ${smlImageSize[1]})`} 
                  className="w-100" onClick={() => goto('`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg',4)} />
                </div>

                <div className="item">
                  <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${smlImageSize[0]}, ${smlImageSize[1]})`}
                  className="w-100" onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg',5)} />
                </div>

                <div className="item">
                  <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg?im=Resize=(${smlImageSize[0]}, ${smlImageSize[1]})`} 
                  className="w-100" onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg',6)} />
                </div>

                <div className="item">
                  <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-8-202305292130.jpg?im=Resize=(${smlImageSize[0]}, ${smlImageSize[1]})`}
                   className="w-100" onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-8-202305292130.jpg',7)} />
                </div>
                
              </Slider>
            </div>
            {/* productZoom code info*/}
           

            {/* productinfo code start*/}
            <div className="col-md-7 productInfo">
              <h1 className="text-blue">
                Seeds of Change Organic Quinoa, <br />
                Brown
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
                Aliquam rem officia, corrupti reiciendis minima nisi modi,
                quasi,
                <br /> odio minus dolore impedit fuga eum eligendi.
              </p>

              <br />

              <div className="productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item">
                    {" "}
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      50g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      60g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      80g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      100g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => isActive(4)}
                    >
                      150g
                    </a>
                  </li>
                </ul>
              </div>

              <div className="addCartSection pt-4 pb-4 d-flex align-items-center">
                <div className="counterSec mr-3">
                  <input type="number" value={inputValue} />
                  <span className="arrow plus" onClick={plus}>
                    <IoIosArrowUp></IoIosArrowUp>
                  </span>
                  <span className=" arrow minus" onClick={minus}>
                    <IoIosArrowDown></IoIosArrowDown>
                  </span>
                </div>

                <Button className="btn-g btn-lg addToCartBtn">
                  <span>
                    <BsCart3></BsCart3>
                  </span>
                  Add To Cart
                </Button>

                <Button className="move btn-lg addToCartBtn ml-3 btn-border">
                  <FaRegHeart></FaRegHeart>
                </Button>

                <Button className="move btn-lg addToCartBtn ml-3 btn-border">
                  <PiShuffleFill></PiShuffleFill>
                </Button>
              </div>
            </div>
            {/* productinfo code end*/}
          </div>

          {/* <div className="col-md-3 rightPart sidebarWrapper">
                <Sidebar></Sidebar>
            </div> */}

          <div className="card mt-5 p-5 detailsPageTabs">

          </div>

        </div>
      </section>
    </>
  );
};

export default DetailsPage;
