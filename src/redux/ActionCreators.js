import * as ActonTypes from "./ActionTypes";

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
