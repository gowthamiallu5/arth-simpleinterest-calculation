import { types } from "./types";
import axios from "axios";
const headers = {
  'Access-Control-Allow-Origin': '*'
}

const fetchPosts = async () => {
  // axios.create({
  //   baseURL: `http://honeywellpoc.ap-south-1.elasticbeanstalk.com/`
  // });
  console.log("infetchdata");
  const data ={
    "a":1,
    "b":2
  }
  await axios.post('http://honeywellpoc.ap-south-1.elasticbeanstalk.com/api/Operations/add',data)   
  .then((response) => { 
    console.log(response);
    
      return {
              type: types.GET_POSTS,
               payload: response,
             };
  }).catch((error) => {    
      console.log(error)
  })
 

  // await axios.post('http://localhost:4010/')   
  // .then((response) => { 
  //   console.log(response);
    
  //     return {
  //             type: types.GET_POSTS,
  //              payload: response,
  //            };
  // }).catch((error) => {    
  //     console.log(error)
  // })
 
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
