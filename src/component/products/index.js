import React from "react";
import "./style.css";
import Rating from "@mui/material/Rating";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div className="productThumb">
        <div className="imgWrapper">
          <img
            src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-2-2.jpg"
            className="w-100"
            alt=""
          />
        </div>
        <div className="info">
          <span className="d-block catName">Hodo Foods</span>
          <h4 className="title"><Link>All Natural Italian-Style Chicken Meatballs</Link></h4>
          <Rating name="read-only" value={4} readOnly />
          <span className="brand d-block">
            By <a className="text-g "> Stouffer </a>
          </span>

          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
               <span className="price"> $17.85</span> <span className="oldPrice"> $19.8</span>
            </div>
            <Button className="bg-g ml-auto">
               Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
