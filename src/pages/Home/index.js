import React from "react";
import Slider from "./slider/index";
import CatSlider from "../../component/catSlider";
import Banners from "../../component/banners";
import "./index.css";
import Products from "../../component/products";

const Home = () => {
  return (
    <>
      <Slider></Slider>
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
    </>
  );
};

export default Home;
