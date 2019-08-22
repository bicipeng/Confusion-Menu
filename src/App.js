import React from 'react';
//import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap'
//import reactstrap component Navbar
//narbarBrand for name 
import './App.css';
import Menu from './components/menucomponent' //menu is every thing you import from menucomponent and you use it in the <menu/>


function App() {
  return (
    <div >
      <Navbar dark color='primary'>
        <div className = 'container'>
          <NavbarBrand href='/'>Ristorante con fusion </NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
