import * as ActionTypes from "./ActionTypes";

let initialState = {
  isLoading: true,
  promotions: [],
  errMess: null
};

export const Promotions = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROMOS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        promotions: action.payload
      };

    case ActionTypes.PROMOS_LOADING:
      return { ...state, isLoading: true, errMess: null, promotions: [] };

    case ActionTypes.PROMOS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
