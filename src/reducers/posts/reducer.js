import { types } from "./../../actions/types";

const initialState = {
  list: [],
};

export const getpost = (state) => state.list;

export function getposts(state = initialState, action) {
  console.log("action", action);
  switch (action.type) {
    case types.GET_POSTS: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export default (state = [], action) => {
  return null;
};
