import users from '../models/user_model.js';
import { v4 as uuidv4 } from 'uuid';

export const getAllUsers = () => users;

export const getUserById = (id) => users.find(u => u.id === id);

export const createUser = (data) => {
  const newUser = { id: uuidv4(), ...data };
  users.push(newUser);
  return newUser;
};

export const updateUser = (id, data) => {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...data };
  return users[index];
};

export const deleteUser = (id) => {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;
  return users.splice(index, 1)[0];
};
