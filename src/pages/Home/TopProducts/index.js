import React from "react";
import "./style.css";
import img1 from "../../../assets/images/fruit.jpg";
import img2 from "../../../assets/images/fruit1.jpg";
import img3 from "../../../assets/images/fruit2.jpg";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const TopProducts = (props) => {
  return (
    <>
      <div className="topSelling_box">
        <h3>{props.title}</h3>

        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
              <img src={img1} className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link to="">
              <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
            </Link>
            <Rating name="read-only" value={4} readOnly />
            <div className="d-flex align-items-center">
              <span className="price text-g font-weight-bold"> $17.85</span>{" "}
              <span className="oldPrice"> $19.8</span>
            </div>
          </div>
        </div>

        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
              <img src={img2} className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link to="">
              <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
            </Link>
            <Rating name="read-only" value={4} readOnly />
            <div className="d-flex align-items-center">
              <span className="price text-g font-weight-bold"> $17.85</span>{" "}
              <span className="oldPrice"> $19.8</span>
            </div>
          </div>
        </div>
        
        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
              <img src={img3} className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link to="">
              <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
            </Link>
            <Rating name="read-only" value={4} readOnly />
            <div className="d-flex align-items-center">
              <span className="price text-g font-weight-bold"> $17.85</span>{" "}
              <span className="oldPrice"> $19.8</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProducts;

