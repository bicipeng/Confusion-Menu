import * as ActionTypes from "./ActionTypes";
// reducer function that only manage the dishses
//the default reutrn is the original state, which is DISHES, this happens
// when we don't have any action to modify the state
let initialState = {
  isLoading: true,
  dishes: [],
  errMess: null
};
export const Dishes = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        dishes: action.payload
      };

    case ActionTypes.DISHES_LOADING:
      return { ...state, isLoading: true,errMess:null,dishes:[]};
    case ActionTypes.DISHES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
