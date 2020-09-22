import { types } from "./../../actions/types";

const initialState = {
  list: [],
  resultvalue: 0,
};

export const getpost = (result, action) => {
  console.log("state", result);
};

export function getposts(state = initialState, action) {
  console.log("action", action);
  switch (action) {
    case types.GET_POSTS: {
      return {
        ...state,
      };
    }
    case types.GET_RESULT: {
      console.log("state", state);
      return {
        ...state
      };  
    }
    default:
      return state;
  }
}

export default (state = [], action) => {
  return null;
};
