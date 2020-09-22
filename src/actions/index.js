import { types } from "./types";
import axios from "axios";

const fetchPosts = async () => {
  console.log("infetchdata");
  await axios
    .get("https://reqres.in/api/users?page=2")
    .then((res) => {
      console.log("res", res);
      return {
        type: types.GET_POSTS,
        payload: res,
      };
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchAddition = () => async (dispatch) => {
  await axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((res) => {
      dispatch({
        type: types.GET_ADDITION,
        payload: res.data,
      });
    })
    .catch((err) => {
      // console.log(err);
    });
};

export default fetchPosts ;
