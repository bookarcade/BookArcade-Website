import {
  FETCH_BUY,
  FETCH_PACKAGE,
  FETCH_RENT,
  FETCH_RETURN
} from "../actions/types";

export default (
  state = { buy: [], rent: null, package: null, return: null },
  action
) => {
  switch (action.type) {
    case FETCH_BUY:
      return { buy: [...state.buy, action.payload] };

    case FETCH_RENT:
      return { rent: action.payload };
    case FETCH_PACKAGE:
      return { package: action.payload };
    case FETCH_RETURN:
      return { return: action.payload };
    default:
      return state;
  }
};
