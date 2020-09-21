import React from "react";
import Header from "./component/header";
import Headline from "./component/headline";
import Arthemetic from "./component/arthemetic";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="SIMPLE INTEREST" desc="Calculating simple interest" />
        <Arthemetic number1={0} number2={0}/>
      </section>
    </div>
  );
}

export default App;
