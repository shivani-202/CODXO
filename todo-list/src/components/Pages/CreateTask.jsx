import React, { useState } from "react";
import "./CreateTask.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const CreateTask = ({ modal, toggle }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader className="title-box" toggle={toggle}>
        New Task
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group title">
            <label>Title</label>
            <input type="text" className="form-control" value={taskName} />
          </div>
          <div className="form-group description">
            <label>Description</label>
            <textarea rows="5" className="form-control" value={description} />
          </div>
        </form>
      </ModalBody>
      <ModalFooter className="footer">
        <Button className="create-btn" onClick={toggle}>
          Create
        </Button>
        <Button className="cancel-btn" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
