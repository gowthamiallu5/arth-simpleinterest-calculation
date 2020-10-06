import React, { useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from 'react-redux';
import { calculationactions } from './../../actions/index'

const Simple = () => {
  const result = useSelector(state => state.calculations.result);
  const [princ, setPrinc] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [simple, setSimple] = useState(0);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const toServer = {
      "principleAmount": princ,
      "year": time,
      "rate": rate
    }
    dispatch(calculationactions.simpleinterest(toServer));

  };


  return (
    <div className="simple-interest">
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
              placeholder={0}
              min={0}
              required
              onInput="validity.valid||(value='');"
              onChange={(e) => setPrinc(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label>Rate</label>
            <input
              type="number"
              value={rate}
              name="rate"
              placeholder={0}
              min={0}
              required
              onInput="validity.valid||(value='');"
              onChange={(e) => setRate(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label>Time(in Months)</label>
            <input
              type="number"
              value={time}
              name="time"
              placeholder={0}
              min={0}
              required
              onInput="validity.valid||(value='');"
              onChange={(e) => setTime(parseInt(e.target.value))}
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
