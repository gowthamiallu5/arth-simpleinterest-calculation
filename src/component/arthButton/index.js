import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./styles.scss";
import { useDispatch } from 'react-redux';
import { calculationactions } from './../../actions/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customId = "custom-id-arth";

const SharedButton = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const error = () => {
    toast.error(`Number cannot be blank`, {
      toastId: customId,
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  const submitEvent = (e) => {
    e.preventDefault();
    const toServer = {
      "a": parseInt(props.number1),
      "b": parseInt(props.number2)
    }
    console.log("submitted inbutton", toServer);
    if(props.number1==="" || props.number2===""){
      error();
    }else{
    switch (props.operation) {
      case 'add': 
        dispatch(calculationactions.addition(toServer));
        break;
      case 'subtract':
        dispatch(calculationactions.substration(toServer));
        break;
      case 'multiply':
        dispatch(calculationactions.multiplication(toServer))
        break;
      case 'divide':
        dispatch(calculationactions.division(toServer))
        break;
      default:
        return 0
        break;
    }
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
