import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {NavDropdown,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";


function Header(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Link to='/'><Navbar.Brand href="#home">Vastra.com</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
            <NavDropdown title="My Profile" id="collasible-nav-dropdown">
                <NavDropdown.Item href="userprofile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="orders">Orders</NavDropdown.Item>
                <NavDropdown.Item href="contactus">Contact Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="settings">Settings</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="fav">Favourites</Nav.Link>
            <Nav.Link href="mybag">My Bag</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )  
}

export default Header;