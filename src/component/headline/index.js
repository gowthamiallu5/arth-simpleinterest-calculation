import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./styles.scss";

class Headline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { header, desc } = this.props;
    if (!header) {
      return null;
    }
    return (
      <div data-test="headlinecomponent" className="headline">
        <h3 data-test="header">{header}</h3>
        <p data-test="desc" className="desc">{desc}</p>
      </div>
    );
  }
}

Headline.propTypes={
    header:PropTypes.string,
    desc:PropTypes.string
}

export default Headline;
