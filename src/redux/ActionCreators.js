import * as ActonTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";
import { baseUrl } from "../shared/baseUrl";
//action creator, return a JS object
//sent the action type to the store
export const addComment = comment => ({
  type: ActonTypes.ADD_COMMENT,
  payload: comment
});
export const postComment = (dishId, rating, author, comment) =>(dispatch)=> {
  const newComment={
    dishId,
    rating,
    author,
    comment,
  }
  newComment.date=new Date().toISOString()
  return fetch(baseUrl + "comments" , {
    method:'POST',
    body: JSON.stringify(newComment),
    headers:{
      'Content-Type':'application/json'
    },
    credentials:'same-origin'
  })
  .then(response=>{
    if(response.ok){
      return response
    }else{
      const error = new Error('Error'+ response.status+": "+response.statusText)
      error.response=response
      throw error
    }
  }).then(response=>response.json())
  .then(res=>dispatch(addComment(res)))
  .catch(error=> {console.log("Post Comments", error.message)
alert('Your comment could not be posted .\n Error: '+ error.message)})
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
      .then(dishes => dispatch(addDishes(dishes)))
      .catch(error => dispatch(dishesFailed(error.message)))
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
  type: ActonTypes.DISHES_LOADING
});
export const promosLoading = () => ({
  type: ActonTypes.PROMOS_LOADING
});
export const dishesFailed = errmess => ({
  type: ActonTypes.DISHES_FAILED,
  payload: errmess
});
export const commentsFailed = errmess => ({
  type: ActonTypes.COMMENTS_FAILED,
  payload: errmess
});

export const addDishes = dishes => ({
  type: ActonTypes.ADD_DISHES,
  payload: dishes
});

export const addComments = comments => ({
  type: ActonTypes.ADD_COMMENTS,
  payload: comments
});

export const addPromos = promos => ({
  type: ActonTypes.ADD_PROMOS,
  payload: promos
});
export const promosFaild = errmess => ({
  type: ActonTypes.PROMOS_FAILED,
  payload: errmess
});
