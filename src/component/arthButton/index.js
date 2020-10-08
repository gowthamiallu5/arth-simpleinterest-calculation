import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./styles.scss";
import { useDispatch } from 'react-redux';
import { calculationactions } from './../../actions/index'

const SharedButton = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const submitEvent = (e) => {
    e.preventDefault();
    const toServer = {
      "a": props.number1,
      "b": props.number2
    }
    console.log("submitted inbutton", toServer);
    switch (props.operation) {
      case 'add':
        dispatch(calculationactions.addition(toServer));
        break;
      case 'subtract':
        dispatch(calculationactions.substration(toServer));
        break;
      case 'multiply':
        dispatch(calculationactions.multiplication(toServer));
        break;
      case 'divide':
        dispatch(calculationactions.division(toServer));
        break;

      default:
        return 0
        break;
    }

  };

  return (
    <Button onClick={submitEvent}
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
