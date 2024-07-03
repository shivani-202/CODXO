import React from "react";
import "./Tasks.css";
const Tasks = () => {
  return (
    <div className="tasks-container">
      <div className="filter-tasks">
        <div className="tasks-filter-btn">
          <p className="title">Tasks.</p>
        </div>
        <div className="tasks-btn">
          <button className="all-tasks">All</button>
          <button className="starred-tasks-btn">Starred</button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
