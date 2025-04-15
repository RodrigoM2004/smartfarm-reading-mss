import users from '../models/user_model.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

export const getAllUsers = () => users;

export const getUserById = (id) => users.find(u => u.id === id);

export const createUser = (data) => {
  const hashedPassword = bcrypt.hashSync(data.password, 10);
  const newUser = { id: uuidv4(), ...data, password: hashedPassword };
  users.push(newUser);
  return { ...newUser, password: undefined };
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

export const login = (email, password) => {
  const user = users.find(u => u.email === email);
  if (!user) return null;

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) return null;

  return user;
};


