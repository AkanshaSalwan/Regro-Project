import React from "react";
import SliderBanner from "./slider/index";
import CatSlider from "../../component/catSlider";

import Banners from "../../component/banners";

import "./index.css";
import Products from "../../component/products";
import Banner4 from "../../assets/images/banner-4.png";
import Slider from "react-slick";
import TopProducts from "./TopProducts";



const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false, //slider slider automatic no need to tap  on slide button
    arrows: true,
    // autoplay:2000
  };

  return (
    <>
      <SliderBanner></SliderBanner>
      <CatSlider></CatSlider>
      <Banners></Banners>

      <section className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-item-center">
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <ul className="list list-inline ml-auto filterTab mb-0">
              <li className="list-inline-item">
                <a href="cursor">All</a>
              </li>
              <li className="list-inline-item">
                <a href="cursor">Milks & Dairies</a>
              </li>
              <li className="list-inline-item">
                <a href="cursor">Coffes & Teas</a>
              </li>
              <li className="list-inline-item">
                <a href="cursor">Pet Foods</a>
              </li>
              <li className="list-inline-item">
                <a href="cursor">Meats</a>
              </li>
              <li className="list-inline-item">
                <a href="cursor">Vegetables</a>
              </li>
              <li className="list-inline-item">
                <a href="cursor">Fruits</a>
              </li>
            </ul>
          </div>
          <div className="row productRow">
            <div className="item">
              <Products></Products>
            </div>
            <div className="item">
              <Products></Products>
            </div>
            <div className="item">
              <Products></Products>
            </div>
            <div className="item">
              <Products></Products>
            </div>
            <div className="item">
              <Products></Products>
            </div>
            <div className="item">
              <Products></Products>
            </div>
            <div className="item">
              <Products></Products>
            </div>
            <div className="item">
              <Products></Products>
            </div>
            <div className="item">
              <Products></Products>
            </div>
            <div className="item">
              <Products></Products>
            </div>
          </div>
        </div>
      </section>

      <section className="homeProducts homeProductsRow2 pt-0">
        <div className="container-fluid">
          <div className="d-flex align-item-center">
            <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
            <ul className="list list-inline ml-auto filterTab mb-0">
              <li className="list-inline-item">
                <a href="cursor">Feature</a>
              </li>
              <li className="list-inline-item">
                <a href="cursor">Popular</a>
              </li>
              <li className="list-inline-item">
                <a href="cursor">New added</a>
              </li>
              {/* <li className="list-inline-item">
                <a href="cursor">Pet Foods</a>
              </li>
              <li className="list-inline-item">
                <a href="cursor">Meats</a>
              </li>
              <li className="list-inline-item">
                <a href="cursor">Vegetables</a>
              </li>
              <li className="list-inline-item">
                <a href="cursor">Fruits</a>
              </li> */}
            </ul>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-3 pr-5">
              <img src={Banner4} className="w-100" />
            </div>

            <div className="col-md-9">
              <Slider {...settings} className="prodSlider">
                {/* slider add krna hia #7 41:26 */}
                <div className="item">
                  <Products></Products>
                </div>
                <div className="item">
                  <Products></Products>
                </div>
                <div className="item">
                  <Products></Products>
                </div>
                <div className="item">
                  <Products></Products>
                </div>
                <div className="item">
                  <Products></Products>
                </div>
                <div className="item">
                  <Products></Products>
                </div>
                <div className="item">
                  <Products></Products>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />

      <section className="topProductSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProducts title="Top Selling"></TopProducts>
            </div>
            <div className="col">
              <TopProducts title="Trending Products"></TopProducts>
            </div>
            <div className="col">
              <TopProducts title="Recently added"></TopProducts>
            </div>
            <div className="col">
              <TopProducts title="Top Rated"></TopProducts>
            </div>
          </div>
        </div>
      </section>
 <br /> <br />
     


    

      <br /><br /><br /><br />
    </>
  );
};

export default Home;
