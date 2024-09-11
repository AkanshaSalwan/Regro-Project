import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="breadcrumbWrapper mb-4">
        <div className="container-fluid">
          <ul className="breadcrumb breadcrumb2 mb-0">
            <li>
              <Link to={'/'}>
                Home
              </Link>
            </li>
            <li>Shop</li>

            <li>Cart</li>
          </ul>
        </div>
      </div>

      <section className="cartSection">
        <div className="container-fluid">
           <div className="d-flex align-items-center w-100">
              <div className="left"> 
              <h1 className="hd mb-0 text-blue">Your Cart</h1>
              <p className="text-gray">There are <span className="text-g">3</span>products in your cart</p>
              </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
