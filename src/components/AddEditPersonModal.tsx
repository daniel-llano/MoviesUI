import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Person } from "../models/Person";

interface Props {
  show: boolean;
  onClose: () => void;
  person: Person | null;
  onSave: (person: Person) => void;
}

const AddEditPersonModal = ({
  show = false,
  onClose,
  person,
  onSave,
}: Props) => {
  const [firstName, setFirstName] = useState(person ? person.firstName : "");
  const [lastName, setLastName] = useState(person ? person.lastName : "");

  const handleSave = () => {
    onSave({ id: person ? person.id : 0, firstName, lastName });
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{person ? "Edit Person" : "Add Person"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEditPersonModal;
