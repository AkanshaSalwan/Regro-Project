import React, { useEffect, useState } from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.svg';
import logo from '../../assets/images/logo1.svg'
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import Compare from '../../assets/images/icon-compare.svg';
import Heart from '../../assets/images/icon-heart.svg';
import Cart from '../../assets/images/icon-cart.svg';
import User from '../../assets/images/icon-user.svg';
import Button from '@mui/material/Button';


import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Nav from './nav/nav';



const Header = () => {

  const [isOpenDropDown, setisOpenDropDown] = useState(false);


// useEffect(()=>{
//   window.addEventListener("scroll",()=>{
//     let position = window.pageYOffset;
//     if(position>100){
//       headerRef.current.classList.add('fixed')
//     }else{
//       headerRef.current.classList.remove('fixed')
//     }
//   })
// },[])

// some changea here #7 28:23
  return (
    <>
      <header>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-2'>
              <img src={logo} />
            </div>

            {/* header start */}

            <div className='col-sm-5'>
              <div className='headerSearch d-flex align-items-center'>
                <div className="selectDrop cursor">
                  All Catagories
                  <Select />
                </div>
                <div className="search">
                  <input type='text' placeholder='Search for items...'/>
                  <SearchIcon className='searchIcon ' />
                </div>
                
              </div>
            </div>
            {/* header end */}


            {/*  */}
            {/*  */}
                 <div className='col-sm-5 d-flex align-items-center'>
                   <div  className='list list-inline mb-0 headerTabs'>
                      <div className='countryWrapper'>

                      </div>

                      <ul className='list list-inline mb-0 headerTab'>
                        <li className='list-inline-item'>
                          <span>
                            <img src={Compare}/>
                            <span className='badge bg-success rounded-circle'>3</span>
                            Compare
                            </span>
                        </li>
                        <li className='list-inline-item'>
                          <span>
                            <img src={Heart}/>
                            <span className='badge bg-success rounded-circle'>8</span>
                            Wishlist
                            </span>
                        </li>
                        <li className='list-inline-item'>
                          <span>
                            <img src={Cart}/>
                            <span className='badge bg-success rounded-circle'>2</span>
                           Cart
                            </span>
                        </li>
                        {/* 1:40:27 clickaway listener remains */}
                        <li className='list-inline-item' >
                            <span onClick={()=>setisOpenDropDown(!isOpenDropDown)}>  
                              <img src={User}/>
                               Account
                            </span>

                            {/* drop down list */}
                            { 
                            isOpenDropDown!==false &&
                            <ul className='dropdownMenu'>
                              <li><Button> <Person2OutlinedIcon></Person2OutlinedIcon>My Account</Button></li>
                              <li><Button> <LocationOnOutlinedIcon></LocationOnOutlinedIcon>Order Tracking</Button></li>
                              <li><Button> <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>My Voucher</Button></li>
                              <li><Button> <SettingsOutlinedIcon></SettingsOutlinedIcon>Setting</Button></li>
                              <li><Button> <LockOutlinedIcon></LockOutlinedIcon>Sign out</Button></li>
                            </ul>
                            }
                        </li>
                       
                      </ul>
                   </div>
                 </div>

         
          </div>
        </div>
      </header>

      <Nav></Nav>
    </>
  )
}

export default Header;