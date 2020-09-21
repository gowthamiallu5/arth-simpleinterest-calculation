import React from "react";
import Header from "./component/header";
import Arthemetic from "./component/arthemetic";
import Simple from "./component/simpleinterest";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <section className="main">
          <Arthemetic number1={0} number2={0} />
        </section>
        <section className="simple">
          <Simple />
        </section>
      </div>
    </div>
  );
}

export default App;
