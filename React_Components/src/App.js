import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header /> 
      <Content/>
      <Footer />
    </>
  );
  // return (
  //     // we have JSX format files only
  //    <div className="App">
  //    <h1>Hello REACT</h1>
  //    <h2>The only working code body</h2>
  //    </div>
  // );
}

export default App;
