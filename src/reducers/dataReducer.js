import { FETCH_BUY } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BUY:
      return action.payload;
    default:
      return state;
  }
};
