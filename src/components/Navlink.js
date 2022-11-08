import React from 'react'
import '../css/navbar.css'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Navlink() {
    return (
        <>
            <Navbar className="navbar" bg="light" expand="lg">
                <Container>
                    <NavLink  className= "nav-link  fw-bold fs-1" to="/home">Dev Pay</NavLink>
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