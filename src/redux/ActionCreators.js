import * as ActonTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";
//action creator, return a JS object
//sent the action type to the store 
export const addComment = (dishId, rating, author, comment) => ({
  type: ActonTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
});

//fechDishes is a thunk doing 2 dispatches
//returns a function which when called will try to fetch the dishes first by setting the isLoading to "True",
// and so that the spinner can be displayed and after a period of time the dishes are fetched and then added into the application.
export const fetchDishes = () => (dispatch) =>{
  dispatch (dishesLoading(true));
  // will replace with an asyn later
  setTimeout(()=>{
    dispatch(addDishes(DISHES))
  },2000)
}
//dishes is starting to load
export const dishesLoading=() =>({
  type: ActonTypes.DISHES_LOADING
})

export const dishesFailed =(errmess) =>(
  {
    type: ActonTypes.DISHES_FAILED,
    payload:errmess
  }
)

export const addDishes=(dishes)=>({
  type: ActonTypes.ADD_DISHES,
  payload:dishes
})