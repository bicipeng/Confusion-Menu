import React, { Component } from "react";
//import logo from './logo.svg';

import Menu from "./MenuComponent"; //menu is every thing you import from menucomponent and you use it in the <menu/>

import DishDetail from "./DishdetailComponent";
import Header from "./HearderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import CommentForm from "./CommentForm";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
//withRouter is require for configuring react component to connect to redux
import { connect } from "react-redux";

class Main extends Component {
  // constructor(props) {
  //   super(props);
  // this.state = {

  //   selectedDish:{}
  // };
  // this.onDishSelect=this.onDishSelect.bind(this)
  // }
  //   onDishSelect(dish){
  //     this.setState(
  //         {
  //             selectedDish:this.props.dish
  //         }
  //         )
  // }
  renderDish(dish) {
    //only render the dish when you click on it ,make the card in the
    //render dish function
    return dish ? <DishDetail /> : null;
  }

  render() {
    const HomePage = () => {
      return (
        // extract where the dish feature is true
        <Home
          dish={this.props.dishes.filter(dish => dish.featured)[0]}
          leader={this.props.leaders.filter(leader => leader.featured)[0]}
          promotion={this.props.promotions.filter(promo => promo.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      // pass 3 params:match, history, location
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };
    return (
      <div>
        <Header />

        <Switch>
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          />

          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    selectedDish: state.selectedDish
  };
};

export default withRouter(connect(mapStateToProps)(Main));
