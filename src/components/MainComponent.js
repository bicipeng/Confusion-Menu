import React, { Component } from "react";
//import logo from './logo.svg';

import Menu from "./MenuComponent"; //menu is every thing you import from menucomponent and you use it in the <menu/>
import { DISHES } from "../shared/dishes";
import { COMMENTS} from "../shared/comments";
import { LEADERS } from "../shared/leaders"
import { PROMOTIONS} from "../shared/promotions";
import DishDetail from'./DishdetailComponent';
import Header from './HearderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import {Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS,
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
        // extract where the dish feature is true
        <Home 
        dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
        promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
        />
      )
    }

    const DishWithId = ({match}) => {
      // pass 3 params:match, history, location
      return(
        <DishDetail dish={this.state.dishes.filter((dish)=> dish.id=== parseInt(match.params.dishId,10))[0]} 
                    comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
        />
      )

    }
    return (
    <div>
       <Header/>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)} />
        <DishDetail singleDish={this.state.selectedDish}/> */}
        <Switch> 
          <Route path='/menu/:dishId' component={DishWithId}/>
          <Route path='/home' component={HomePage}/>
          <Route exact path ='/menu' component={()=><Menu dishes={this.state.dishes}/>}/>
          <Route exact path='/contactus' component={Contact}/>
          <Redirect to='/home'/>
        </Switch>
        <Footer/>   
    </div>
    );
  }
}

export default Main;

