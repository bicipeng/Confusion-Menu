import { createStore, combineReducers } from "redux"; //allows me to create the redux store
import { Leaders } from "./leaders";
import { Dishes } from "./dishes";
import { Promotions } from "./promtions";
import { SelectedDish } from "./selectedDish";
import { Comments } from "./comments";
//our global state is here

export const ConfigureStore = () => {

  const store = createStore(
    // specifiy how we want to combine the reducers here
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      selectedDish: SelectedDish
    })
  );
  return store;
};
