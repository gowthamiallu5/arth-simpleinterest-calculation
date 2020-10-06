import React, { useState } from "react";
import Headline from "./../headline/index";
import SharedButton from "./../arthButton/index";
import "./styles.scss";
import { useDispatch, useSelector } from 'react-redux';

const Arthemetic = (props) => {
  const result = useSelector(state => state.calculations.result);
  var NAV_BUTTONS = [
    { value: "+ Add", operation: "add" },
    { value: "- Subtract", operation: "subtract" },
    { value: "x Multiply", operation: "multiply" },
    { value: "/ Divide", operation: "divide" },
  ];
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  
  var navButtons = NAV_BUTTONS.map((button, index) => {
    return (
      <SharedButton
        value={button.value}
        key={index}
        operation={button.operation}
        number1 = {number1}
        number2={number2}
      />
    );
  });

  return (
    <div data-test="Arthemeticcomponent">
      <section className="arth">
        <Headline
          header="ARITHMETIC OPERATIONS"
          desc="Addition,substraction,multiplication,division"
        />
        <div className="arthdiv">
          <div className="inputdiv">
            <label className="labelinput">user input 1</label>
            <input
              data-test="inputnumber1"
              className="inputtext"
              type="number"
              value={number1}
              placeholder={0} required="required"
              name="number1" min={0} 
              onChange={(e) => setNumber1(parseInt(e.target.value))}
            />
          </div>
          <div className="inputdiv">
            <label className="labelinput">user input 2</label>
            <input
              data-test="inputnumber2"
              className="inputtext"
              type="number"
              value={number2}
              placeholder={0} required="required"
              name="number2" min={0}
              onChange={(e) => setNumber2(parseInt(e.target.value))}
            />
          </div>
          <div className="buttons">{navButtons}</div>
          <h1 className="result">Result = {result}</h1>
          </div>
      </section>
    </div>
  );
};

const showvalue = (resultvalue) => {
  console.log("resultvalue", resultvalue);
  //setTotal(resultvalue)
};

// const mapStateToProps = (state) => ({
//   resultvalue: showvalue(state),
// });

export default Arthemetic;
