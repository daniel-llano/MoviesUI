import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Person } from "../models/Person";

interface DeletePersonModalProps {
  show: boolean;
  onClose: () => void;
  onDelete: (person: Person) => void;
  person: Person | null;
}

const DeletePersonModal: React.FC<DeletePersonModalProps> = ({
  show,
  onClose,
  onDelete,
  person,
}) => {
  const handleDelete = () => {
    if (person) {
      onDelete(person);
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Person</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete {person?.firstName} {person?.lastName}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePersonModal;
