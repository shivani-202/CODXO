import React, { useState } from "react";
import "./Tasks.css";
import CreateTask from "../Pages/CreateTask";
const Tasks = () => {
  const [modal, setModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="filters">
            <h4 className="text-title">tasks.</h4>
            <div
              className={`tasks-category ${
                activeCategory === "All" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("All")}
            >
              All
            </div>
            <div
              className={`tasks-category ${
                activeCategory === "Starred" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("Starred")}
            >
              Starred
            </div>
          </div>
        </div>
        <div className="main">
          <div className="tasks">
            <p className="task-default-text">No tasks found</p>
          </div>
          <div className="task-btn">
            <button className="add-task" onClick={() => setModal(true)}>
              Add Task
            </button>
          </div>
        </div>
      </div>
      <CreateTask toggle={toggle} modal={modal} />
    </>
  );
};

export default Tasks;
