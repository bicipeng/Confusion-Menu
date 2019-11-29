import { DISHES } from "../shared/dishes";
// reducer function that only manage the dishses
//the default reutrn is the original state, which is DISHES, this happens 
// when we don't have any action to modify the state
export const Dishes = (state = DISHES, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
