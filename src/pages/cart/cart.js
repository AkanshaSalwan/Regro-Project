import  {useState } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import Rating from "@mui/material/Rating";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'

const Cart = () => {
  const [inputValue, setinputValue] = useState(1);

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
                  <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>Clear
                  Cart
                </span>
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

                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="img">
                              <img
                                src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg"
                                className="w-100"
                              />
                            </div>

                            <div className="info pl-4">
                              <Link>
                                <h4 className="text-blue-text">
                                  Field Roast Chao Cheese Creamy Original
                                </h4>
                              </Link>
                              <Rating name="read-only" value={4.0} readOnly />{" "}
                              <span className="text-light">(4.0)</span>
                            </div>
                          </div>
                        </td>

                        <td className="text-gray">$2.51</td>
                        <td>
                        
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
                          </div>
                        </td>
                       
                       <td><span className="text-g">$2.56</span></td>

                       <td><span className="cursor"><DeleteForeverOutlinedIcon></DeleteForeverOutlinedIcon></span></td>
                         
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-md-5">
                {/* 26:47 #14 */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
