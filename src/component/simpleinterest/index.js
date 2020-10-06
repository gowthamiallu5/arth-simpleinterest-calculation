import React, { useState } from "react";
import "./styles.scss";

const Simple = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const [princ, setPrinc] = useState("0");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [simple, setSimple] = useState(0);
  const [total, setTotal] = useState(0);
  
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
            name="Principal Amount" 
            placeholder="0" 
            min="0" 
            required 
            oninput="validity.valid||(value='');"
            onChange={(e) => setPrinc(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label>Rate</label>
            <input 
            type="number" 
            value={rate} 
            name="rate" 
            placeholder="0" 
            min="0" 
            required 
            oninput="validity.valid||(value='');"
            onChange={(e) => setRate(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label>Time(in Months)</label>
            <input 
            type="number" 
            value={time} 
            name="time" 
            placeholder="0" 
            min="0" 
            required 
            oninput="validity.valid||(value='');"
            onChange={(e) => setTime(parseInt(e.target.value))}
            />
          </div>
          <button type="submit" data-test="button">
            Simple-Interest
          </button>
          <div>
            <label>Simple Interest</label>
            <input
              type="text"
              name="simple-interest"
              placeholder="0"
              disabled
            />
          </div>
          {/* //simple+total */}
          <p>Amount = {total}</p>
        </form>
      </section>
    </div>
  );
};

export default Simple;
