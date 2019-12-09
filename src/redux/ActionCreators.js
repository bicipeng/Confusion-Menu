import * as ActionTypes from "./ActionTypes";

import { baseUrl } from "../shared/baseUrl";
import { actionTypes } from "react-redux-form";
//action creator, return a JS object
//sent the action type to the store
export const addComment = comment => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});
export const postComment = (dishId, rating, author, comment) => dispatch => {
  const newComment = {
    dishId,
    rating,
    author,
    comment
  };
  newComment.date = new Date().toISOString();
  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const error = new Error(
          "Error" + response.status + ": " + response.statusText
        );
        error.response = response;
        throw error;
      }
    })
    .then(response => response.json())
    .then(res => dispatch(addComment(res)))
    .catch(error => {
      console.log("Post Comments", error.message);
      alert("Your comment could not be posted .\n Error: " + error.message);
    });
};

export const postFeedback = (
  firstName,
  lastName,
  telNum,
  email,
  agree,
  contactType,
  message
) => dispatch => {
  const feedBack = {
    firstName,
    lastName,
    telNum,
    email,
    agree,
    contactType,
    message
  };
  feedBack.date = new Date().toISOString();
  return fetch(baseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(feedBack),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const error = new Error(
          "Error" + response.status + ": " + response.statusText
        );
        error.response = response;
        throw error;
      }
    })
    .then(response => response.json())
    .then(res => dispatch(addComment(res)))
    .catch(error => {
      console.log("Post Comments", error.message);
      alert("Your comment could not be posted .\n Error: " + error.message);
    });
};

//fechDishes is a thunk doing 2 dispatches
//returns a function which when called will try to fetch the dishes first by setting the isLoading to "True",
// and so that the spinner can be displayed and after a period of time the dishes are fetched and then added into the application.
export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading(true));
  // will replace with an asyn later
  //the following equivalent to localhost:3001/dishes
  return (
    fetch(baseUrl + "dishes")
      // res.ok tells you if you get data from fetching if you get data, we return the res, and the
      // res will go to the next .then
      .then(
        res => {
          if (res.ok) {
            console.log("what is the fetch data in", res);
            return res;
          } else {
            //  get responds, but it is an error
            // generate a new error and extract the res status form the response error code
            const error = new Error(
              "Error" + res.status + ": " + res.statusText
            );
            error.res = res;
            //  when you throw the error in a promise handler, we can then implement a catch at the bottom which will catch the error and then handle the error appropriately.

            throw error;
          }
        },
        // when the server doesnt respond,error.message tells you what the error is
        error => {
          const errorMessage = new Error(error.message);
          throw errorMessage;
        }
      )
      .then(res => res.json())
      .then(dishes => dispatch(addDishes(dishes)))
      .catch(error => dispatch(dishesFailed(error.message)))
  );
};
export const fetchLeaders = () => dispatch => {
  dispatch(leadersLoading(true));
  // will replace with an asyn later
  //the following equivalent to localhost:3001/dishes
  return (
    fetch(baseUrl + "leaders")
      // res.ok tells you if you get data from fetching if you get data, we return the res, and the
      // res will go to the next .then
      .then(
        res => {
          if (res.ok) {
            return res;
          } else {
            //  get responds, but it is an error
            // generate a new error and extract the res status form the response error code
            const error = new Error(
              "Error" + res.status + ": " + res.statusText
            );
            error.res = res;
            //  when you throw the error in a promise handler, we can then implement a catch at the bottom which will catch the error and then handle the error appropriately.
            console.log("**&^%check error", error);
            throw error;
          }
        },
        // when the server doesnt respond,error.message tells you what the error is
        error => {
          const errorMessage = new Error(error.message);
          throw errorMessage;
        }
      )
      .then(res => res.json())
      .then(leaders => dispatch(addLeaders(leaders)))
      .catch(error => dispatch(leadersFailed(error.message)))
  );
};
export const fetchComments = () => dispatch => {
  // will replace with an asyn later
  //the following equivalent to localhost:3001/dishes
  return fetch(baseUrl + "comments")
    .then(
      res => {
        if (res.ok) {
          return res;
        } else {
          const error = new Error("Error" + res.status + ": " + res.statusText);
          error.res = res;
          throw error;
        }
      },
      error => {
        const errorMessage = new Error(error.message);
        throw errorMessage;
      }
    )
    .then(res => res.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const fetchPromos = () => dispatch => {
  // will replace with an asyn later
  //the following equivalent to localhost:3001/dishes
  return fetch(baseUrl + "promotions")
    .then(
      res => {
        if (res.ok) {
          return res;
        } else {
          const error = new Error("Error" + res.status + ": " + res.statusText);
          error.res = res;
          throw error;
        }
      },
      error => {
        const errorMessage = new Error(error.message);
        throw errorMessage;
      }
    )
    .then(res => res.json())
    .then(promotions => dispatch(addPromos(promotions)))
    .catch(error => dispatch(promosFaild(error.message)));
};

//dishes is starting to load
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});
export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING
});
export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
});
export const dishesFailed = errmess => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
});
export const leadersFailed = errmess => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess
});
export const commentsFailed = errmess => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
});

export const addDishes = dishes => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});
export const addLeaders = leaders => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

export const addPromos = promos => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
});
export const promosFaild = errmess => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess
});
