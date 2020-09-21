import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const SharedButton = (props) => {
    console.log(props);
//   submitEvent(){
//     //   if(this.props.emitEvent){
//     //       this.props.emitEvent();
//     //   }
//   }

  return (
    <Button
    variant="primary"  onClick={() => this.submitEvent()}
      data-test="buttonComponent"
    >
      {props.value}
    </Button>
  );
};

export default SharedButton;
