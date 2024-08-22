import React from "react";
import "./style.css";
import Rating from "@mui/material/Rating";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Product = () => {
  return (
    <>
      <div className="productThumb">
      <Link>
         <div className="imgWrapper">
            <img
            src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-2-2.jpg"
            className="w-100"
            alt=""/>
         </div>
      </Link>
        <div className="info">
          <span className="d-block catName">Hodo Foods</span>
          <h4 className="title"><Link>All Natural Italian-Style Chicken Meatballs</Link></h4>
          <Rating name="read-only" value={4} readOnly />
          <span className="brand d-block text-g">
            By <Link className="text-g "> Stouffer </Link>
          </span>

          <div className="d-flex align-items-center mt-3">
            <div className="d-flex align-items-center">
               <span className="price text-g font-weight-bold"> $17.85</span> <span className="oldPrice"> $19.8</span>
            </div>
            <Button className=" ml-auto transition">
              <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
               Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
