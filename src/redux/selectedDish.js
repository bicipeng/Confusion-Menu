let initialDish = {};
//reducer function has two params: state and action
// if the state is undefine, then the state is the initial sate, state=initialState
export const SelectedDish = (state = initialDish, action) => {
  //no action yet, just return the current state
  switch (action.type) {
    default:
      return state;
  }
};
