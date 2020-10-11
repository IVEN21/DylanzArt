import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar";
import "font-awesome/css/font-awesome.css";

import Upload from "../src/Components/Upload";
import { Route } from "react-router-dom";
import Page from "./Page";
import { getCurrrentUser } from "./Components/BackendService/authService";
function App() {

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/upload" component={Upload} />
      <Route exact path="/" component={Page} />
    </div>
  );
}

export default App;
