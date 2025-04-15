import * as userService from '../services/user_service.js';

export const getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
};

export const getUserById = (req, res) => {
  const user = userService.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.json(user);
};

export const createUser = (req, res) => {
  const newUser = userService.createUser(req.body);
  res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
  const updated = userService.updateUser(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.json(updated);
};

export const deleteUser = (req, res) => {
  const deleted = userService.deleteUser(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.status(204).send();
};
