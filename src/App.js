import React from "react";
import "./App.css";
import Main_1 from "./Components/Main_1";
import Main_2 from "./Components/Main_2";
import Main_3 from "./Components/Main_3";
import Main_4 from "./Components/Main_4";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main_1 />
      <Main_2 />
      <Main_3 />
      <Main_4 />
    </div>
  );
}

export default App;
