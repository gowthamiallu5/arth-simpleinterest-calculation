import React, { useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from 'react-redux';
import { calculationactions } from './../../actions/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customId = "custom-id-si";

const Simple = () => {
  const result = useSelector(state => state.calculations.result);
  const [princ, setPrinc] = useState(1);
  const [rate, setRate] = useState(1);
  const [time, setTime] = useState(1);
  const [simple, setSimple] = useState(0);
  const dispatch = useDispatch();

  const error = (msg) => {
    toast.error(`${msg} cannot be blank or zero`, {
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
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(princ , rate, time)
    if(princ==="" || princ<=0){
      error("Principal")
    }else if(rate==="" || rate<=0){
      error("Rate")

    }else if(time==="" || time<=0){
      error("Time")

    }else {
      const toServer = {
      "principleAmount": parseInt(princ),
      "year": parseInt(time),
      "rate": parseInt(rate)
    }
      dispatch(calculationactions.simpleinterest(toServer));
      }
  };


  return (
    <div className="simple-interest">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="si-func">
        <h1 className="head" data-test="head">
          Simple-Interest-Calculator
        </h1>
        <form
          className="simple-interest"
          data-test="simple-interest"
          onSubmit={handleFormSubmit}
        >
          <div>
            <label>Principal</label>
            <input
              type="number"
              value={princ}
              name="principal"
              placeholder={"Enter Principal"}
              min={0}
            
              onInput="validity.valid||(value='');"
              onChange={(e) => setPrinc(e.target.value)}
            />
          </div>
          <div>
            <label>Rate</label>
            <input
              type="number"
              value={rate}
              name="rate"
              placeholder={"Enter Rate"}
              min={0}
              
              onInput="validity.valid||(value='');"
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div>
            <label>Time(in Months)</label>
            <input
              type="number"
              value={time}
              name="time"
              placeholder={"Enter Time"}
              min={0}
              required
              onInput="validity.valid||(value='');"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <button type="submit" data-test="button">
            Simple-Interest
          </button>
          <p>Simple Interest = {result}</p>
        </form>
      </section>
    </div>
  );
};

export default Simple;
