import { createStore } from "redux"; //allows me to create the redux store
import { Reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
  //createstore takes two params, reducer and initialstate if required
  const store = createStore(Reducer, initialState);
  return store;
};
