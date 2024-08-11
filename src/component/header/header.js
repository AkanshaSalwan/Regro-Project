import React from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.png';
import SearchIcon from '@mui/icons-material/Search';


const Header =() =>{
    return(
        <>
        <header>
          <div className='container-fluid'>
               <div className='row'>
                      <div className='col-sm-2'>
                           <img src={Logo} />
                      </div>

                         
                     
                      <div className='col-sm-5'>
                          <div className='headerSearch d-flex align-item-center'>
                               <div className='selectDrop cursor'>
                                   All Categories
                               </div>
                               <div className='search'>
                                 <input type="text" placeholder='Search for items.....'/>
                                 <SearchIcon className='SearchIcon' />
                               </div>
                          </div>
                      </div>
               </div>
          </div>
        </header>
        </>
    )
}

export default Header;