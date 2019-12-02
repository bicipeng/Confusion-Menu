import { createStore, combineReducers,applyMiddleware } from "redux"; //allows me to create the redux store
import { Leaders } from "./leaders";
import { Dishes } from "./dishes";
import { Promotions } from "./promtions";
import { SelectedDish } from "./selectedDish";
import { Comments } from "./comments";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form'; //allows us to add the form stat into the store 
import { InitialFeedBack } from "./forms";
//our global state is here

export const ConfigureStore = () => {

  const store = createStore(
    // specifiy how we want to combine the reducers here
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      selectedDish: SelectedDish,
      ...createForms({
        feedback:InitialFeedBack
      })

    }),
    applyMiddleware(thunk,logger)
  );
  return store;
};
