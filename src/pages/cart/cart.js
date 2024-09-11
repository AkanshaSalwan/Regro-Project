import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Cart = () => {
  return (
    <>
      <div className="breadcrumbWrapper mb-4">
        <div className="container-fluid">
          <ul className="breadcrumb breadcrumb2 mb-0">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Shop</li>

            <li>Cart</li>
          </ul>
        </div>
      </div>

      <section className="cartSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="d-flex align-items-center w-100">
                <div className="left">
                  <h1 className="hd mb-0 text-blue">Your Cart</h1>
                  <p className="text-gray">
                    There are <span className="text-g">3</span>products in your
                    cart
                  </p>
                </div>

                <span className="ml-auto clearCart d-flex align-items-center cursor">
                    <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>Clear Cart</span>
              </div>

              <div className="cartWrapper mt-4">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-blue">Product</th>
                                <th className="text-blue">Unit Price</th>
                                <th className="text-blue">Quantity</th>
                                <th className="text-blue">Subtotal</th>
                                <th className="text-blue">Remove</th>
                            </tr>
                        </thead>
                    </table>

                   <tbody>
                   <tr>
                        <td>
                            <div className="img">
                               <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg"
                                className="w-100"/> 
                            </div>
                        </td>
                    </tr>
                   </tbody>
                </div>
              </div>

            </div>

            <div className="col-md-5">

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
