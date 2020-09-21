import React from "react";
import Header from "./component/header";
import Arthemetic from "./component/arthemetic";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Arthemetic number1={0} number2={0}/>
      </section>
    </div>
  );
}

export default App;
