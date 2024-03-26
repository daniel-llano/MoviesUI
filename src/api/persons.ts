import axios, { AxiosResponse } from 'axios';
import { Person } from '../models/Person';

const API_URL = 'https://localhost:7239/api/persons';

// GET all persons
export const getAllPersons = async (): Promise<Person[]> => {
  const response: AxiosResponse<Person[]> = await axios.get(API_URL);
  return response.data;
};

// GET person by ID
export const getPersonById = async (id: number): Promise<Person | null> => {
  try {
    const response: AxiosResponse<Person> = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching person by ID:', error);
    return null;
  }
};

// POST new person
export const addPerson = async (newPerson: Person): Promise<Person | null> => {
  try {
    const response: AxiosResponse<Person> = await axios.post(API_URL, newPerson);
    return response.data;
  } catch (error) {
    console.error('Error adding new person:', error);
    return null;
  }
};

// PUT update person
export const updatePerson = async (id: number, updatedPerson: Person): Promise<Person | null> => {
  try {
    const response: AxiosResponse<Person> = await axios.put(`${API_URL}/${id}`, updatedPerson);
    return response.data;
  } catch (error) {
    console.error('Error updating person:', error);
    return null;
  }
};

// DELETE person
export const deletePerson = async (id: number): Promise<boolean> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    console.error('Error deleting person:', error);
    return false;
  }
};
