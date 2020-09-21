import React, { Component } from "react";
import PropTypes from "prop-types";

class Arthemetic extends Component {
  constructor(props) {
    super(props);
  }
  render() {
     let number1,
      number2 = 0;
    return (
      <div data-test="Arthemeticcomponent">
        <div className="number-inputs">
          <input
            type="number"
            value={number1}
            placeholder="0"
          />
          <input
            type="number"
            value={number2}
            placeholder="0"
          />
        </div>
      </div>
    );
  }
}

Arthemetic.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
};

export default Arthemetic;
