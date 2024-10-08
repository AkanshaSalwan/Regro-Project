import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@mui/material";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { PiShuffleFill } from "react-icons/pi";
import Sidebar from "../../component/Sidebar/sidebar";
import Products from "../../component/products";

const DetailsPage = () => {
  // const goto=(index)=>{}
  const [zoomImage, setZoomImage] = useState(
    "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg"
  );

  const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
  const [smlImageSize, setSmlImageSize] = useState([150, 1500]);

  const [activeTabs, setActiveTabs] = useState(2);

  const zoomSlider = useRef();
  const zoomSliderBig = useRef();

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

  var related = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false, //slider slider automatic no need to tap  on slide button
    arrows: true,
    // autoplay:2000
  };

  const goto = (url, index) => {
    setTimeout(() => {
      setZoomImage(url);
    }, 200);
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
      <section className="detailsPage mb-5">
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
                <Slider
                  {...settings2}
                  className="zoomSliderBig"
                  ref={zoomSliderBig}
                >
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src={`${zoomImage}?im=Resize=(${bigImageSize[0]}, ${bigImageSize[1]})`}
                    />
                  </div>
                </Slider>
              </div>

              {/* 56:02 12 */}
              <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                <div className="item">
                  <img
                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${smlImageSize[0]}, ${smlImageSize[1]})`}
                    className="w-100"
                    onClick={() =>
                      goto(
                        "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg",
                        0
                      )
                    }
                  />
                </div>
                <div className="item">
                  <img
                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${smlImageSize[0]}, ${smlImageSize[1]})`}
                    className="w-100"
                    onClick={() =>
                      goto(
                        "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg",
                        1
                      )
                    }
                  />
                </div>

                <div className="item">
                  <img
                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${smlImageSize[0]}, ${smlImageSize[1]})`}
                    className="w-100"
                    onClick={() =>
                      goto(
                        "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg",
                        2
                      )
                    }
                  />
                </div>

                <div className="item">
                  <img
                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize(${smlImageSize[0]}, ${smlImageSize[1]})`}
                    className="w-100"
                    onClick={() =>
                      goto(
                        "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg",
                        3
                      )
                    }
                  />
                </div>

                <div className="item">
                  <img
                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${smlImageSize[0]}, ${smlImageSize[1]})`}
                    className="w-100"
                    onClick={() =>
                      goto(
                        "`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg",
                        4
                      )
                    }
                  />
                </div>

                <div className="item">
                  <img
                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${smlImageSize[0]}, ${smlImageSize[1]})`}
                    className="w-100"
                    onClick={() =>
                      goto(
                        "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg",
                        5
                      )
                    }
                  />
                </div>

                <div className="item">
                  <img
                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg?im=Resize=(${smlImageSize[0]}, ${smlImageSize[1]})`}
                    className="w-100"
                    onClick={() =>
                      goto(
                        "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg",
                        6
                      )
                    }
                  />
                </div>

                <div className="item">
                  <img
                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-8-202305292130.jpg?im=Resize=(${smlImageSize[0]}, ${smlImageSize[1]})`}
                    className="w-100"
                    onClick={() =>
                      goto(
                        "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-8-202305292130.jpg",
                        7
                      )
                    }
                  />
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
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      50g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      60g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      80g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      100g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => isActive(4)}
                    >
                      150g
                    </a>
                  </li>
                </ul>
              </div>
              {/* Counter section */}
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

            {/* Counter section end*/}
            {/* productinfo code end*/}
          </div>

          {/* <div className="col-md-3 rightPart sidebarWrapper">
                <Sidebar></Sidebar>
            </div> */}

          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button onClick={() => setActiveTabs(0)}>Description</Button>
                </li>
                <li className="list-inline-item">
                  <Button onClick={() => setActiveTabs(1)}>
                    Additional info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button onClick={() => setActiveTabs(2)}>Reviews (3)</Button>
                </li>
              </ul>
              <br />

              {activeTabs === 0 && (
                <div className="tabContent">
                  <p>
                    Uninhibited carnally hired played in whimpered dear gorilla
                    koala depending and much yikes off far quetzal goodness and
                    from for grimaced goodness unaccountably and meadowlark near
                    unblushingly crucial scallop tightly neurotic hungrily some
                    and dear furiously this apart.
                  </p>
                  <p>
                    Spluttered narrowly yikes left moth in yikes bowed this that
                    grizzly much hello on spoon-fed that alas rethought much
                    decently richly and wow against the frequent fluidly at
                    formidable acceptably flapped besides and much circa far
                    over the bucolically hey precarious goldfinch mastodon
                    goodness gnashed a jellyfish and one however because.
                  </p>

                  <br />

                  <h2>Packaging & Delivery</h2>
                  <hr />
                  <p>
                    Less lion goodness that euphemistically robin expeditiously
                    bluebird smugly scratched far while thus cackled sheepishly
                    rigid after due one assenting regarding censorious while
                    occasional or this more crane went more as this less much
                    amid overhung anathematic because much held one exuberantly
                    sheep goodness so where rat wry well concomitantly. Scallop
                    or far crud plain remarkably far by thus far iguana lewd
                    precociously and and less rattlesnake contrary caustic wow
                    this near alas and next and pled the yikes articulate about
                    as less cackled dalmatian in much less well jeering for the
                    thanks blindly sentimental whimpered less across objectively
                    fanciful grimaced wildly some wow and rose jeepers outgrew
                    lugubrious luridly irrationally attractively dachshund.
                  </p>

                  <br />

                  <h2>Suggested Use</h2>
                  <br />
                  <p>Refrigeration not necessary.</p>

                  <p>Stir before serving</p>

                  <br />

                  <h2>Other Ingredients</h2>
                  <br />
                  <p>Organic raw pecans, organic raw cashews.</p>

                  <p>
                    his butter was produced using a LTG (Low Temperature
                    Grinding) process
                  </p>

                  <p>
                    Made in machinery that processes tree nuts but does not
                    process peanuts, gluten, dairy or soy
                  </p>

                  <br />
                  <h2>Warnings</h2>
                  <br />
                  <p>
                    Oil separation occurs naturally. May contain pieces of
                    shell.
                  </p>
                </div>
              )}

              {activeTabs === 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    {" "}
                    {/*boostrap classs */}
                    <table className="table table-bordered">
                      <tbody>
                        <tr class="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr class="folded-wo-wheels">
                          <th>Folded (w/o wheels)</th>
                          <td>
                            <p>32.5″L x 18.5″W x 16.5″H</p>
                          </td>
                        </tr>
                        <tr class="folded-w-wheels">
                          <th>Folded (w/ wheels)</th>
                          <td>
                            <p>32.5″L x 24″W x 18.5″H</p>
                          </td>
                        </tr>
                        <tr class="door-pass-through">
                          <th>Door Pass Through</th>
                          <td>
                            <p>24</p>
                          </td>
                        </tr>
                        <tr class="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                        <tr class="weight-wo-wheels">
                          <th>Weight (w/o wheels)</th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>
                        <tr class="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr class="width">
                          <th>Width</th>
                          <td>
                            <p>24″</p>
                          </td>
                        </tr>
                        <tr class="handle-height-ground-to-handle">
                          <th>Handle height (ground to handle)</th>
                          <td>
                            <p>37-45″</p>
                          </td>
                        </tr>
                        <tr class="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12″ air / wide track slick tread</p>
                          </td>
                        </tr>
                        <tr class="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5″</p>
                          </td>
                        </tr>
                        <tr class="head-room-inside-canopy">
                          <th>Head room (inside canopy)</th>
                          <td>
                            <p>25″</p>
                          </td>
                        </tr>
                        <tr class="pa_color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr class="pa_size">
                          <th>Size</th>
                          <td>
                            <p>M, S</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTabs === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer question & answer</h3>
                      <br></br>
                      <div className="card p-4 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/blog/author-2.png" />
                          </div>
                          <br />
                          <span
                            className="text-g d-block text-center 
                          font-weight-bold"
                          >
                            Sienna
                          </span>
                        </div>

                        <div className="info pl-5">
                          <div className="d-flex align-items-center">
                            <h5 className="text-light">
                              December 4, 2024 at 3:12 pm
                            </h5>
                            <div className="ml-auto">
                              <Rating name="read-only" value={4} readOnly />
                            </div>
                          </div>

                          <p className="text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Delectus, suscipit exercitationem accusantium
                            obcaecati quos voluptate nesciunt facilis itaque
                            modi commodi dignissimos sequi repudiandae minus ab
                            deleniti totam officia id incidunt? Reply
                          </p>
                        </div>
                      </div>

                      <div className="card p-4 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/blog/author-2.png" />
                          </div>
                          <br />
                          <span
                            className="text-g d-block text-center 
                          font-weight-bold"
                          >
                            Sienna
                          </span>
                        </div>

                        <div className="info pl-5">
                          <div className="d-flex align-items-center">
                            <h5 className="text-light">
                              December 4, 2024 at 3:12 pm
                            </h5>
                            <div className="ml-auto">
                              <Rating name="read-only" value={4} readOnly />
                            </div>
                          </div>

                          <p className="text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Delectus, suscipit exercitationem accusantium
                            obcaecati quos voluptate nesciunt facilis itaque
                            modi commodi dignissimos sequi repudiandae minus ab
                            deleniti totam officia id incidunt? Reply
                          </p>
                        </div>
                      </div>

                      <div className="card p-4 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/blog/author-2.png" />
                          </div>
                          <br />
                          <span
                            className="text-g d-block text-center 
                          font-weight-bold"
                          >
                            Sienna
                          </span>
                        </div>

                        <div className="info pl-5">
                          <div className="d-flex align-items-center">
                            <h5 className="text-light">
                              December 4, 2024 at 3:12 pm
                            </h5>
                            <div className="ml-auto">
                              <Rating name="read-only" value={4} readOnly />
                            </div>
                          </div>

                          <p className="text-gray">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Delectus, suscipit exercitationem accusantium
                            obcaecati quos voluptate nesciunt facilis itaque
                            modi commodi dignissimos sequi repudiandae minus ab
                            deleniti totam officia id incidunt? Reply
                          </p>
                        </div>
                      </div>

                      <br />
                      <br />

                      <form className="reviewForm">
                        <h4 className="text-blue font-weight-bold">
                          {" "}
                          Add a review
                        </h4>
                        <Rating name="read-only" value={0.5} readOnly />

                        <div className="form-group">
                          {/* <textarea className="form-control" placeholder="Write Comment"> </textarea> */}
                          <input
                            type="text"
                            className="form-control form-control-1"
                            placeholder="Write Comment"
                          />
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Website"
                          />
                        </div>
                        <br />

                        <Button className="btn-g btn-lg">Submit Review</Button>
                      </form>
                    </div>

                    <div className="col-md-4 pl-5">
                      <h4>Customer reviews</h4>

                      <div className="d-flex align-items-center mt-2r">
                        <Rating name="read-only" value={4} readOnly />{" "}
                        <span className="text-blue font-weight-bold ml-3">
                          4.8 out of 5
                        </span>
                      </div>
                      <br />

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3 text-gray">5 star</span>
                        <div className="progress " style={{width: '65%', height:'27px'}}>
                          <div
                            class="progress-bar bg-success"
                            style={{ width: '50%',height:'27px'}}
                          >50%</div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3 text-gray">5 star</span>
                        <div className="progress " style={{width: '65%', height:'27px'}}>
                          <div
                            class="progress-bar bg-success"
                            style={{ width: '20%',height:'27px'}}
                          >20%</div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3 text-gray">5 star</span>
                        <div className="progress " style={{width: '65%', height:'27px'}}>
                          <div
                            class="progress-bar bg-success"
                            style={{ width: '40%',height:'27px'}}
                          >40%</div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3 text-gray">5 star</span>
                        <div className="progress " style={{width: '65%', height:'27px'}}>
                          <div
                            class="progress-bar bg-success"
                            style={{ width: '35%',height:'27px'}}
                          >35%</div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3 text-gray">5 star</span>
                        <div className="progress " style={{width: '65%', height:'27px'}}>
                          <div
                            class="progress-bar bg-success"
                            style={{ width: '80%',height:'27px'}}
                          >80%</div>
                        </div>
                      </div>
                      <br />
                      <hr />
                        <p className="text-gray">How are ratings calculated?</p>

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <br />
          <div className="relatedProducts pt-5 pb-4">
            <h2 className="hd mb-0 mt-0">Related products</h2> <br />
            <Slider {...related} className="prodSlider">
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
            {/*1:01:31  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
