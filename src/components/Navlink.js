// import React from 'react';
// import {  Link } from "react-router-dom";

// const Navbar= () => { 
  
//   return (
//   <div id='navbar'>
//     <li id='logo'>
//       <Link to="/home">DevPay</Link>
//     </li>
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <Link to="/about">About</Link>
//     </li>
//     <li>
//       <Link to="/services">Services</Link>
//     </li>
//     <button>
//       <Link to="/signup">SignIn</Link>
//     </button>
//     <button>
//       <Link to="/signup">SignUp</Link>
//     </button>
//   </div>
//   );
// }
// export default Navbar;

import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Navlink() {
    return (
        <>
            <Navbar className="navbar" bg="light" expand="lg">
                <Container>
                    <NavLink  className= "nav-link  fw-bold fs-5" to="/home">Dev Pay</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <li className="nav-item me-4">
                                <NavLink className="nav-link  fw-bold fs-5" aria-current="page" end to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item me-4 fw-bold  fs-5" >
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item me-4 fw-bold fs-5">
                                <NavLink className="nav-link" to="/service">Service</NavLink>
                            </li>
                            <div  className='nav-item my-2 my-md-0 ml-auto'>
                            <NavLink className="btn btn-outline-dark me-5 mx-auto mr-4 ml-2" to="/login">
                                LogIn</NavLink>
                           </div> 
                           <div  className='my-2 my-md-0 ml-auto'>
                           <NavLink className="btn btn-outline-dark me-5 mx-auto mr-4 ml-2" to="/signup">
                                SignUP</NavLink>
                           </div>  

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}

export default Navlink