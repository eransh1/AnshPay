  import React from "react"
  import "./CSS/Navbar_Main.css"
  import "./index.css"
  import { NavLink } from "react-router-dom";
  import Button from 'react-bootstrap/Button';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';


  function Navbar_Main() {
    return (
      <section className="navbar-bg">
      <Navbar className="navbar"  expand="lg">
        <Container className="container">
          <NavLink className="navbar-brand" to="/">AnshPay</NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink className="nav-list-item" to="/AnshPay">Home</NavLink>
              <NavLink className="nav-list-item" to="/services">Services</NavLink>
              <NavLink className="nav-list-item" to="/about">About</NavLink>
              <NavLink className="nav-list-item" to="/contact">Contact</NavLink>
            </Nav>
              <Button className="nav-btn-Login" >Sign Up</Button>
              <Button className="nav-btn-Signup" >Log In</Button>
          </Navbar.Collapse>  
        </Container>
      </Navbar>
      </section>
    );
  }

  export default Navbar_Main;