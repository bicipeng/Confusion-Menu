import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
  selectedDish: {}
};
//reducer function has two params: state and action
// if the state is undefine, then the state is the initial sate, state=initialState
export const Reducer = (state = initialState, action) => {
  //no action yet, just return the current state
  return state;
};
