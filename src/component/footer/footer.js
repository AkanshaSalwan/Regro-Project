import React from "react";
import "./footer.css";
import icon1 from "../../assets/images/icon-1.svg";
import icon2 from "../../assets/images/icon-2.svg";
import icon3 from "../../assets/images/icon-3.svg";
import icon4 from "../../assets/images/icon-4.svg";
import icon5 from "../../assets/images/icon-5.svg";
import logo from "../../assets/images/logo1.svg";
import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import appStore from "../../assets/images/app-store.jpg";
import googlePlay from "../../assets/images/google-play.jpg";
import paymentMethod from "../../assets/images/payment-method.png";
import { LuPhoneCall } from "react-icons/lu";
import { RiFacebookFill } from "react-icons/ri";
import { ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerBoxes">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={icon1} />
                  </span>
                  <div className="info">
                    <h4>Best prices & offers</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={icon2} />
                  </span>
                  <div className="info">
                    <h4>Free delivery</h4>
                    <p>24/7 amazing services</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={icon3} />
                  </span>
                  <div className="info">
                    <h4>Great daily deal</h4>
                    <p>When you sign up</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={icon4} />
                  </span>
                  <div className="info">
                    <h4>Wide assortment</h4>
                    <p>Mega Discounts</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={icon5} />
                  </span>
                  <div className="info">
                    <h4>Easy returns</h4>
                    <p>Within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br /> <br />
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 part1">
                <Link to="/">
                  <img src={logo} className="imgLogo" />
                </Link>
                <br /> <br />
                <p>
                  Awesome grocery store website <br /> template
                </p>
                <br />
                <p>
                  {" "}
                  <span className="svg-icon">
                    {" "}
                    <FiMapPin></FiMapPin>
                  </span>
                  <strong> Address:</strong> 5171 W Campbell Ave <br />{" "}
                  undefined Kent, Utah 53127 United States
                </p>
                <p>
                  {" "}
                  <span className="svg-icon">
                    <HeadsetMicOutlinedIcon></HeadsetMicOutlinedIcon>
                  </span>{" "}
                  <strong>Call Us:</strong>(+91) - 540-025-124553
                </p>
                <p>
                  {" "}
                  <span className="svg-icon">
                    <SendOutlinedIcon></SendOutlinedIcon>
                  </span>{" "}
                  <strong>Email:</strong>sale@Nest.com
                </p>
                <p>
                  {" "}
                  <span className="svg-icon">
                    <QueryBuilderOutlinedIcon></QueryBuilderOutlinedIcon>
                  </span>
                  <strong>Hours:</strong>10:00 - 18:00, Mon - Sat
                </p>
              </div>

              <div className="col-md-6 part2">
                <div className="row">
                  <div className="col">
                    <h3>Company</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Delivery Information</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Condition</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Support Center</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Account</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <a href="#">Sign In</a>
                      </li>
                      <li>
                        <a href="#">View Cart</a>
                      </li>
                      <li>
                        <a href="#">My Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Track My Order</a>
                      </li>
                      <li>
                        <a href="#">Help Ticket</a>
                      </li>
                      <li>
                        <a href="#">Shipping Details</a>
                      </li>
                      <li>
                        <a href="#">Compare products</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Corporate</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <a href="#">Become a Vendor</a>
                      </li>
                      <li>
                        <a href="#">Affiliate Program</a>
                      </li>
                      <li>
                        <a href="#">Farm Business</a>
                      </li>
                      <li>
                        <a href="#">Farm Careers</a>
                      </li>
                      <li>
                        <a href="#">Our Suppliers</a>
                      </li>
                      <li>
                        <a href="#">Accessibility</a>
                      </li>
                      <li>
                        <a href="#">Promotions</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Popular</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <a href="#">Milk & Flavoured Milk</a>
                      </li>
                      <li>
                        <a href="#">Butter and Margarine</a>
                      </li>
                      <li>
                        <a href="#">Eggs Substitutes</a>
                      </li>
                      <li>
                        <a href="#">Marmalades</a>
                      </li>
                      <li>
                        <a href="#">Sour Cream and Dips</a>
                      </li>
                      <li>
                        <a href="#">Tea & Kombucha</a>
                      </li>
                      <li>
                        <a href="#">Cheese</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 part3">
                <h3>Install App</h3>
                <br />
                <p>From App Store or Google Play</p>
                <div className="d-flex">
                  <Link to={""}>
                    {" "}
                    <img src={appStore} width={140} />{" "}
                  </Link>
                  <Link to={""}>
                    {" "}
                    <img src={googlePlay} className="mx-2" width={140} />{" "}
                  </Link>
                </div>
                <br /> <br />
                <p>Secured Payment Gateways</p>
                <img src={paymentMethod} className="mx-2 p3" width={250} />
              </div>
            </div>

            <hr />

        <div className="row lastStrip">
              <div className="col-md-3 ">
                <p>@Devloped By Akansha Salwan ❤️ All rights reserved.</p>
              </div>
            <div className="col-md-6 d-flex">
               <div className="m-auto d-flex align-items-center">
               <div className="phNo d-flex align-items-center mx-4">
                  <span>
                    <LuPhoneCall></LuPhoneCall>
                  </span>
                  <div className="info ml-3">
                    <h5 className="text-g mb-0">
                      1900-6666
                      <p className="mb-0">Working 8:00 - 22:00</p>
                    </h5>
                  </div>
                </div>
                <div className="phNo d-flex align-items-center mx-4">
                  <span>
                    <LuPhoneCall></LuPhoneCall>
                  </span>
                  <div className="info ml-3">
                    <h5 className="text-g mb-0">
                      1900-8888
                      <p className="mb-0">24/7 Support Center</p>
                    </h5>
                  </div>
                </div>
               </div>
             </div>



            <div className="col-md-3 part3">
               <div className="d-flex align-items-center">
                <h5>Follow Us</h5>
                <ul className="list list-inline d-flex">
                    <li className="list-inline-items">
                        <Link to={''}> < RiFacebookFill></RiFacebookFill> </Link>
                    </li>
                    <li className="list-inline-items">
                        <Link to={''}> <ImTwitter></ImTwitter> </Link>
                    </li>
                    <li className="list-inline-items">
                        <Link to={''}> <FaInstagram></FaInstagram> </Link>
                    </li>
                    <li className="list-inline-items">
                        <Link to={''}> < FaPinterestP></FaPinterestP> </Link>
                    </li>
                    <li className="list-inline-items">
                        <Link to={''}> <FaYoutube></FaYoutube> </Link>
                    </li>
                </ul>
                
                {/* <p>Up to 15% discount on your first subscribe</p> */}
               </div>
            </div>
            </div>
         </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
