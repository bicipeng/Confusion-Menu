import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes";
export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      let newComment = action.payload;

      newComment.id = state.length;
      newComment.date = new Date().toISOString();

      return [...state, newComment];
    default:
      return state;
  }
};
