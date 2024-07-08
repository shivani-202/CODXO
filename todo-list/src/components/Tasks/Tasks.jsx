import React, { useState } from "react";
import "./Tasks.css";
import CreateTask from "../Pages/CreateTask";
const Tasks = () => {
  const [modal, setModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [tasks, setTasks] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, completed: false }]);
    setModal(false); //close the modal
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  const toggleTaskStar = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, starred: !task.starred } : task
    );
    setTasks(updatedTasks);
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks =
    activeCategory === "All" ? tasks : tasks.filter((task) => task.starred);
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
            {filteredTasks.length === 0 ? (
              <p className="task-default-text">No tasks found</p>
            ) : (
              filteredTasks.map((task, index) => (
                <div
                  key={index}
                  className={`task-item ${task.completed ? "completed" : ""}`}
                  onClick={() => toggleTaskCompletion(index)}
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(index)}
                  />
                  <div className="task-content">
                    <h5 className="task-name">{task.taskName}</h5>
                    <p className="task-desc">{task.description}</p>
                    <div className="task-actions">
                      <button onClick={() => toggleTaskStar(index)}>
                        {tasks.starred ? "★" : "☆"}
                      </button>
                      <button onClick={() => deleteTask(index)}>🗑️</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="task-btn">
            <button className="add-task" onClick={toggle}>
              Add Task
            </button>
          </div>
        </div>
      </div>
      <CreateTask toggle={toggle} modal={modal} addTask={addTask} />
    </>
  );
};

export default Tasks;
