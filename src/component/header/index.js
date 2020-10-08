import React from "react";
import "./styles.scss";
import Logo from "../../assets/graphics/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Arthemetic from "./../arthemetic/index";
import Simple from "./../simpleinterest/index";
import Dummyapi from "./../dummyapi/index";
import Weather from "./../weather/index";

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
                <Link to="/">Arithmetic</Link>
              </li>
              <li>
                <Link to="/Simpleinterest">Simple Interest</Link>
              </li>
              {/* <li>
                <Link to="/Dummyapi">Dummy api</Link>
              </li> */}
              <li>
                <Link to="/Weather">Temperature</Link>
              </li>
            </ul>
            <div className="content">
              <Switch>
                <Route exact path="/" component={Arthemetic} />
                <Route path="/Simpleinterest" component={Simple} />
                {/* <Route path="/Dummyapi" component={Dummyapi} /> */}
                <Route path="/weather" component={Weather} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </header>
  );
};

export default Header;
