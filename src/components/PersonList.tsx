import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddEditPersonModal from "./AddEditPersonModal";
import DeletePersonModal from "./DeletePersonModal";
import {
  addPerson,
  deletePerson,
  getAllPersons,
  updatePerson,
} from "../api/persons";
import { Person } from "../models/Person";

const PersonList = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = async () => {
    const fetchedPersons = await getAllPersons();
    setPersons(fetchedPersons);
    setSelectedPerson(null);
  };

  const handleAddEditModalClose = () => {
    setShowAddEditModal(false);
    setSelectedPerson(null);
  };

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
    setSelectedPerson(null);
  };

  const handleEditClick = (person: Person) => {
    setSelectedPerson(person);
    setShowAddEditModal(true);
  };

  const handleDeleteClick = (person: Person) => {
    setSelectedPerson(person);
    setShowDeleteModal(true);
  };

  const handleOnDeleteClick = async () => {
    if (selectedPerson) {
      const deletedPerson = await deletePerson(selectedPerson.id);
      if (deletedPerson) {
        setShowDeleteModal(false);
        fetchPersons();
      }
    }
  };

  const handleAddClick = () => {
    setSelectedPerson(null);
    setShowAddEditModal(true);
  };

  const handleSave = async (person: Person) => {
    if (person.id > 0) {
      // Edit existing person
      const updatedPerson = await updatePerson(person.id, person);
      if (updatedPerson) {
        setShowAddEditModal(false);
        fetchPersons();
      }
    } else {
      // Add new person
      const newPerson = await addPerson(person);
      if (newPerson) {
        setShowAddEditModal(false);
        fetchPersons();
      }
    }
  };

  return (
    <>
      <Button onClick={handleAddClick}>Add Person</Button>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person: Person) => (
            <tr key={person.id}>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>
                <Button onClick={() => handleEditClick(person)}>Edit</Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteClick(person)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddEditPersonModal
        show={showAddEditModal}
        onClose={handleAddEditModalClose}
        person={selectedPerson}
        onSave={handleSave}
      />
      <DeletePersonModal
        show={showDeleteModal}
        onClose={handleDeleteModalClose}
        person={selectedPerson}
        onDelete={handleOnDeleteClick}
      />
    </>
  );
};

export default PersonList;
