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
            <Nav className="nav__right">
            <NavDropdown title={<img src="https://img.icons8.com/wired/64/000000/gender-neutral-user--v1.png"/>} id="collasible-nav-dropdown">
                <NavDropdown.Item href="userprofile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="orders">Orders</NavDropdown.Item>
                <NavDropdown.Item href="contactus">Contact Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="settings">Settings</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="fav"><img src="https://img.icons8.com/ios/50/000000/like.png"/></Nav.Link>
            <Nav.Link href="mybag"><img src="https://img.icons8.com/ios/50/000000/shopping-bag--v3.png"/></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )  
}

export default Header;