import React from 'react';
import { Link}  from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import Sidebar from '../../component/Sidebar/sidebar';
import Products from '../../component/products';
import { Button } from '@mui/material';
import  { useEffect, useState } from 'react';
import { AiOutlineAppstore } from "react-icons/ai";
import { TbSortDescending2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const Listing =()=>{

    const [isOpenDropDown, setisOpenDropDown] = useState(false);
    const [isOpenDropDown2, setisOpenDropDown2] = useState(false);
   return(
    <>
     <section className='listingPage'>
        <div className='container-fluid'>
           <div className='breadcrumb flex-column'>
              <h1>Snack</h1>
              <ul className='list list-inline mb-0'>
                <li className='list-inline-item'> 
                   <Link to={''}> <span><CiHome></CiHome></span>Home</Link>
                </li>
                <li className='list-inline-item'> 
                   <Link to={''}> <span>< IoIosArrowForward></IoIosArrowForward></span>Shop</Link>
                </li>
                <li className='list-inline-item'> 
                   <Link to={''}> <span>< IoIosArrowForward></IoIosArrowForward></span>Snack</Link>
                </li>
              </ul>
           </div>


           <div className='listingData'>
                <div className='row'>
                    <div className='col-md-2 sidebarWrapper'>   {/*can manage the width of products cards  */}
                        <Sidebar></Sidebar>
                    </div>

                    <div className='col-md-9 rightContent homeProducts pt-0'>

                    <div className='topStrip d-flex align-items-center'>
                        <p className='mb-0'>We found <span className='text-success'>29</span> items for you</p>
                        <div className='ml-auto d-flex align-items-center'>
                            <div className='tab_ position-relative'>
                            <Button className='btn_'  onClick={()=>setisOpenDropDown(!isOpenDropDown)}> <span><AiOutlineAppstore ></AiOutlineAppstore></span> Show:50 <span><IoIosArrowDown></IoIosArrowDown></span></Button>
                           {
                             isOpenDropDown!==false &&
                             <ul className='dropdownMenu'>
                               <li><Button className='align-items-center' onClick={()=>setisOpenDropDown(false)}>50</Button></li>
                               <li><Button className='align-items-center' onClick={()=>setisOpenDropDown(false)}> 100</Button></li>
                               <li><Button className='align-items-center' onClick={()=>setisOpenDropDown(false)}>150</Button></li>
                               <li><Button className='align-items-center' onClick={()=>setisOpenDropDown(false)}>200</Button></li>
                               <li><Button className='align-items-center' onClick={()=>setisOpenDropDown(false)}>All</Button></li>
                             </ul>
                           }
                            </div>
                            <div className='tab_ ml-3 position-relative'>
                            <Button className='btn_'  onClick={()=>setisOpenDropDown2(!isOpenDropDown2)}> <span><TbSortDescending2></TbSortDescending2></span>Sort by:Featured  <span><IoIosArrowDown></IoIosArrowDown></span></Button>
                            {
                             isOpenDropDown2!==false &&
                             <ul className='dropdownMenu'>
                               <li><Button className='align-items-center' onClick={()=>setisOpenDropDown2(false)}>Featured</Button></li>
                               <li><Button className='align-items-center' onClick={()=>setisOpenDropDown2(false)}> Price:Low to High</Button></li>
                               <li><Button className='align-items-center' onClick={()=>setisOpenDropDown2(false)}>Price:High to Low</Button></li>
                               <li><Button className='align-items-center' onClick={()=>setisOpenDropDown2(false)}>Release Date</Button></li>
                               <li><Button className='align-items-center' onClick={()=>setisOpenDropDown2(false)}>Avg Rating</Button></li>
                             </ul>
                           }
                            </div>
                        </div>

                    </div>


                        <div className='productRow pl-4 pr-3'>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                            <div className='item'>
                                <Products></Products>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
      </section> 
   </>
   )
}

export default Listing;


//css app.css mai lagyaa hai iska