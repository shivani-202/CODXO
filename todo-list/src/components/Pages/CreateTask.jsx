import React, { useState } from "react";
import "./CreateTask.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateTask = ({ modal, toggle, addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!taskName.trim()) newErrors.taskName = "Task name is required";
    if (!description.trim()) newErrors.description = "Description is required";
    return newErrors;
  };

  const handleCreateTask = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const newTask = {
        taskName: taskName,
        description: description,
      };

      addTask(newTask);

      setTaskName("");
      setDescription("");
      toggle();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader className="title-box" toggle={toggle}>
        New Task
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group title">
            <input
              type="text"
              className="form-control"
              placeholder="task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            {errors.taskName && <div className="error">{errors.taskName}</div>}
          </div>
          <div className="form-group description">
            <textarea
              rows="5"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description && (
              <div className="error">{errors.description}</div>
            )}
          </div>
        </form>
        <div className="btn-container">
          <div className="create-btn">
            <Button className="create" onClick={handleCreateTask}>
              Create
            </Button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default CreateTask;
