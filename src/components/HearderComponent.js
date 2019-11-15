import React, {Component } from 'react';
import { Navbar, NavbarBrand,Jumbotron } from "reactstrap";
class Header extends Component{
    render (){
        return (
        <>
        <Navbar dark >
        <div className="container">
          <NavbarBrand href="/">Ristorante con fusion </NavbarBrand>
        </div>
      </Navbar>
      <Jumbotron>
      <div className="container">
          <div className="row row-header">
              <div className="col-12 col-md-6">
                  <h1>Ristorante con fusion </h1>
                  <p>We take inspiration from the worl'd best cuisines</p>
              </div>
          </div>
      </div>
      </Jumbotron>
      </>)
    }
}

export default Header;