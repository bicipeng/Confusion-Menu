import React, { Component } from "react";
//import logo from './logo.svg';

import Menu from "./MenuComponent"; //menu is every thing you import from menucomponent and you use it in the <menu/>

import DishDetail from "./DishdetailComponent";
import Header from "./HearderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//  we need this action creator function in order to obtain an action
//  JavaScript object which we can then dispatch to the store by saying, calling store dispatch.
import {
  postComment,
  postFeedback,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders
} from "../redux/ActionCreators";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
//withRouter is require for configuring react component to connect to redux
import { connect } from "react-redux";
import { actions } from "react-redux-form";

class Main extends Component {
  componentDidMount() {
    // this will ensure that when my mainComponent is mounted, then I'll go and fetch all these from that server
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  renderDish(dish) {
    //only render the dish when you click on it ,make the card in the
    //render dish function
    return dish ? <DishDetail /> : null;
  }

  render() {
    console.log("in the mainCom,what is dishes", this.props.dishes.dishes);
    let dishes = this.props.dishes.dishes;
    let comments = this.props.comments.comments;
    let promotions = this.props.promotions.promotions;
    let leaders = this.props.leaders.leaders;
    const HomePage = () => {
      return (
        // extract where the dish feature is true

        <Home
          dish={dishes.filter(dish => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          leader={leaders.filter(leader => leader.featured)[0]}
          promotion={promotions.filter(promo => promo.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
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
          comments={comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    };
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
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
              <Route
                exact
                path="/contactus"
                component={() => (
                  <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />
                )}
              />
              <Route
                exact
                path="/aboutus"
                component={() => <About leaders={this.props.leaders} />}
              />

              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
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
  // addComment (dishId...) wer are calling the action creator and will return the action object for adding a comment
  //the action obj is then given as a parameter to the dispatch function here
  // and this dispatch action use the action Obj as a param and supply as the function inside the mapDispatchToprops s.t we can use it
  // within out component through connect
  //the addComment will be passed in as an attribute for the disDetail compoonent
  postComment: (dishId, rating, author, comment) => {
    dispatch(postComment(dishId, rating, author, comment));
  },
  postFeedback: (
    firstName,
    lastName,
    telNum,
    email,
    agree,
    contactType,
    message
  ) => {
    dispatch(
      postFeedback(
        firstName,
        lastName,
        telNum,
        email,
        agree,
        contactType,
        message
      )
    );
  },

  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  fetchLeaders: () => {
    dispatch(fetchLeaders());
  },
  fetchComments: () => {
    dispatch(fetchComments());
  },
  fetchPromos: () => {
    dispatch(fetchPromos());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
