import React from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';


const Header = () => {
  return (
    <>
      <header>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-2'>
              <img src={Logo} />
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
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;