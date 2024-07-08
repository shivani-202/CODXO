import React from "react";
import Header from "./components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tasks from "./components/Tasks/Tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="app">
        <Header className="header" />
        <Tasks />
      </div>
    </>
  );
};

export default App;
