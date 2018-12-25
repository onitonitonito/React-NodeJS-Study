/*
* ./components/ScrollBox.js 를 랜더링 한다.
* ./index.js 에서 App을 불러서 랜더링 한다.
**/


import React from "react";
// import { render } from "react-dom";
import ScrollBox from "./ScrollBox";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => <ScrollBox />;

// render(<App />, document.getElementById("root"));
export default App;