import React, { Component } from "react";
//import logo from './logo.svg';

import Menu from "./MenuComponent"; //menu is every thing you import from menucomponent and you use it in the <menu/>
import { DISHES } from "../shared/dishes";
import DishDetail from'./DishdetailComponent';
import Header from './HearderComponent'

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
    return (
      <div className='container'>
       <Header/>
          {/* <div className="col-12 col-md-6 m-1"> */}
            
              <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)} />
        <DishDetail singleDish={this.state.selectedDish}/>
          {/* </div> */}
      
     
      </div>
    );
  }
}

export default Main;

