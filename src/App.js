import React,{Component}from 'react';
//import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap'
//import reactstrap component Navbar
//narbarBrand for name 
import './App.css';
import Menu from './components/MenuComponent' //menu is every thing you import from menucomponent and you use it in the <menu/>

import { DISHES } from './shared/dishes';


class App extends Component {
constructor(props){
  super(props);
  this.state={
    dishes:DISHES
  };
}
render(){
  return (
    <div>
      <Navbar dark color='primary'>
        <div className = 'container'>
          <NavbarBrand href='/'>Ristorante con fusion </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes ={this.state.dishes}/>
    </div>
  );
}
}

export default App;
