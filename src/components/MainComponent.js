import React, { Component } from "react";
//import logo from './logo.svg';

import Menu from "./MenuComponent"; //menu is every thing you import from menucomponent and you use it in the <menu/>

import DishDetail from "./DishdetailComponent";
import Header from "./HearderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";

//  we need this action creator function in order to obtain an action
//  JavaScript object which we can then dispatch to the store by saying, calling store dispatch.
import { addComment, fetchDishes } from "../redux/ActionCreators";

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

  componentDidMount() {
    this.props.fetchDishes();
  }
  renderDish(dish) {
    //only render the dish when you click on it ,make the card in the
    //render dish function
    return dish ? <DishDetail /> : null;
  }

  render() {
    let dishes = this.props.dishes.dishes;
    const HomePage = () => {
      return (
        // extract where the dish feature is true

        <Home
          dish={dishes.filter(dish => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
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
            dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
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
            component={() => (
              <Menu
                dishes={dishes}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}
              />
            )}
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

const mapDispatchToProps = dispatch => ({
  // addComment (dishId...) wer are calling the action creator and will return the action object for addding a comment
  //the action obj is then given as a paramerter to the dispatch function here
  // and thie dispatch cution us the action Obj as a param and supply as teh function inside the mapDispatchToprops s.t we can use it
  // within out component through connect
  //the addComment will be passed in as an attribute for the disDetail compoonent
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
