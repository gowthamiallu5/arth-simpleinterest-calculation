import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./styles.scss";
import { connect } from "react-redux";
import { getposts } from "../../reducers/posts/reducer";
import { types } from "./../../actions/types";

const SharedButton = (props) => {
  console.log(props);
  const submitEvent = () => {
    console.log("submitted inbutton");
   // getposts(2, types.GET_RESULT);
    //   if(this.props.emitEvent){
    //       this.props.emitEvent();
    //   }
  };

  return (
    <Button 
      variant="primary"
      type="submit"
      className="buttoncss"
      data-test="buttonComponent"
    >
      {props.value}
    </Button>
  );
};

// const mapStateToProps = (state) => ({
//   resultvalue: state.resultvalue,
// });

export default SharedButton;
