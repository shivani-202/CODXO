import React from "react";
import Header from "./components/Header/Header";
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
