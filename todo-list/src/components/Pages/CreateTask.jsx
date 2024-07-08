import React, { useState } from "react";
import "./CreateTask.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateTask = ({ modal, toggle, addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateTask = () => {
    const newTask = {
      taskName: taskName,
      description: description,
    };

    addTask(newTask);

    setTaskName("");
    setDescription("");
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader className="title-box" toggle={toggle}>
        New Task
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group title">
            {/* <label>Title</label> */}
            <input
              type="text"
              className="form-control"
              placeholder="task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="form-group description">
            {/* <label>Description</label> */}
            <textarea
              rows="5"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </form>
        <div className="btn">
          <Button className="create " onClick={handleCreateTask}>
            Create
          </Button>
          <Button className="cancel" onClick={toggle}>
            Cancel
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default CreateTask;
