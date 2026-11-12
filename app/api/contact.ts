import axios from "axios";
import { ContactType } from "../_types/contact";
export const dynamic = "force-dynamic";

const API_URL = "http://localhost:3001";

export const getContacts = async (userId: string) => {
  const response = await axios.get(`${API_URL}/contact?userId=${userId}`);
  return response.data;
};

export const getContactById = async (id: string) => {
  const response = await axios.get(`${API_URL}/contact/${id}`);
  return response.data;
};

export const createContact = async (contact: ContactType) => {
  const response = await axios.post(`${API_URL}/contact`, contact);
  return response.data;
};

export const updateContact = async (id: string, contact: ContactType) => {
  const response = await axios.patch(`${API_URL}/contact/${id}`, contact);
  return response.data;
};

export const deleteContact = async (id: string) => {
  const response = await axios.delete(`${API_URL}/contact/${id}`);
  return response.data;
};
