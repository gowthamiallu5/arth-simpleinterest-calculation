import React, { useState } from "react";
import "./styles.scss";

const Simple = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
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
            <input type="text" type="number" name="Principal Amount" placeholder="0" min="0" required oninput="validity.valid||(value='');"/>
          </div>
          <div>
            <label>Rate</label>
            <input type="text" type="number" name="rate" placeholder="0" min="0" required oninput="validity.valid||(value='');"/>
          </div>
          <div>
            <label>Time(in Months)</label>
            <input type="text" type="number" name="time" placeholder="0" min="0" required oninput="validity.valid||(value='');"/>
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
          <p>Amount = {}</p>
        </form>
      </section>
    </div>
  );
};

export default Simple;
