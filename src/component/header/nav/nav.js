import React from 'react';
import  './nav.css' ;
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';




const Nav = ()=>{
    return(
        <>
          <div className='nav d-flex align-items-center'>
            <div className='container-fluid '>
              <div className='row'>
                <div className='col-sm-3 part1'>
                  <Button className='bg-g text-whit catTab'>
                    <GridViewOutlinedIcon></GridViewOutlinedIcon>&nbsp; {/* &nbasp use for gapping between logo and text*/}
                     Browse All Categories
                    <KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon>
                 </Button>
                </div>
                <div className='col-sm-6 part2'>
                <nav>
                    <ul className='list list-inline'>
                        <li className='list-inline-item'>
                            <Button><Link>
                            Home
                            <KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon> 
                            </Link></Button>
                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>About</Link></Button>
                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>Shop <KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon></Link></Button>
                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>Venders<KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon></Link></Button>
                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>Megha menu<KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon></Link></Button>
                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>Blog<KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon></Link></Button>
                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>Pages<KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon></Link>
                            </Button>

                            <div className='dropdown_menu'>
                              <ul>
                                <li><Button><Link to="/about">About Us</Link></Button></li>
                                <li><Button><Link to="/about">Contact</Link></Button></li>
                                <li><Button><Link to="/about">My Account</Link></Button></li>
                                <li><Button><Link to="/about">Login</Link></Button></li>
                                <li><Button><Link to="/about">Register</Link></Button></li>
                                <li><Button><Link to="/about">Forgot Password</Link></Button></li>
                                <li><Button><Link to="/about">Reset Password</Link></Button></li>
                                <li><Button><Link to="/about">Purchase Guide</Link></Button></li>
                                <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                                <li><Button><Link to="/about">Terms Of Service</Link></Button></li>
                                <li><Button><Link to="/about">404 Page</Link></Button></li>
                             </ul>  
                            </div>
                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>Contact</Link></Button>
                        </li>
                    </ul>
                </nav>
                </div>
                <div className='col-sm-2 part3 d-flex align-items-center ml-auto'>
                    <div className='phNo d-flex align-items-center ml-auto'>
                        <span><SupportAgentOutlinedIcon></SupportAgentOutlinedIcon></span>
                        <div className='info ml-3'>
                            <h5 className='text-g mb-0'>
                                1900-888
                                <p className='mb-0'>24/7 Support Center</p>
                            </h5>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>    
        </>
    )
}

export default Nav;
