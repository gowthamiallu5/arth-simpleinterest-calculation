import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./styles.scss";
import { useDispatch } from 'react-redux';
import { calculationactions } from './../../actions/index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SharedButton = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const error = () => {
    toast.error(`Number cannot be blank`, {
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
      "a": props.number1,
      "b": props.number2
    }
    console.log("submitted inbutton", toServer);
    switch (props.operation) {
      case 'add':
        if(props.number1==="" || props.number2===""){
          error();
        }else{
        dispatch(calculationactions.addition(toServer));}
        break;
      case 'subtract':
        if(props.number1==="" || props.number2===""){
          error();
        }else{
        dispatch(calculationactions.substration(toServer));}
        break;
      case 'multiply':
        if(props.number1==="" || props.number2===""){
          error();
        }else{
        dispatch(calculationactions.multiplication(toServer))};
        break;
      case 'divide':
        if(props.number1==="" || props.number2===""){
          error();
        }else{
        dispatch(calculationactions.division(toServer))};
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
