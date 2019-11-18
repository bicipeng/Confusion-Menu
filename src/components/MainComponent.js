import React, { Component } from "react";
//import logo from './logo.svg';

import Menu from "./MenuComponent"; //menu is every thing you import from menucomponent and you use it in the <menu/>
import { DISHES } from "../shared/dishes";
import DishDetail from'./DishdetailComponent';
import Header from './HearderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import {Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish:{}
    };
    this.onDishSelect=this.onDishSelect.bind(this)
  }
  onDishSelect(dish){
    this.setState(
        {
            selectedDish:dish
        }
        )
}
renderDish(dish){//only render the dish when you click on it ,make the card in the 
    //render dish function 
    return ( dish ? 
    <DishDetail/> :null)
    }


  render() {
    const HomePage=()=>{
      return (
        <Home/>
      )
    }
    return (
    <div>
       <Header/>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)} />
        <DishDetail singleDish={this.state.selectedDish}/> */}
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route exact path ='/menu' component={()=><Menu dishes={this.state.dishes}/>}/>
          <Redirect to='/home'/>
        </Switch>
        <Footer/>   
    </div>
    );
  }
}

export default Main;

