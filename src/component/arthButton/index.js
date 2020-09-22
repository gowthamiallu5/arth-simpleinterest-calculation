import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./styles.scss";

const SharedButton = (props) => {
    console.log(props);
//   submitEvent(){
//     //   if(this.props.emitEvent){
//     //       this.props.emitEvent();
//     //   }
//   }

  return (
    <Button
    variant="primary" className="buttoncss" 
      data-test="buttonComponent"
    >
      {props.value}
    </Button>
  );
};

export default SharedButton;
