import React from "react";
import "./styles.scss";
import Logo from "../../assets/graphics/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Arthemetic from "./../arthemetic/index";
import Simple from "./../simpleinterest/index";

const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <Router>
          <div className="logo">
            <img data-test="imagelogo" src={Logo} alt="logo" />
          </div>
          <div>
            <ul className="header">
              <li>
                <Link to="/">Arthemetic</Link>
              </li>
              <li>
                <Link to="/Simpleinterest">Simple Interest</Link>
              </li>
              <li>
                <Link to="/dashboard">Temperature</Link>
              </li>
            </ul>
            <div className="content">
              <Switch>
                <Route exact path="/" component={Arthemetic} />
                <Route path="/Simpleinterest" component={Simple} />
                <Route path="/dashboard" component={Simple} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </header>
  );
};

export default Header;
