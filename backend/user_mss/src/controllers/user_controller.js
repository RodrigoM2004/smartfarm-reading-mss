import * as userService from '../services/user_service.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.json(user);
};

export const createUser = (req, res) => {
  const { name, email, password, address, dateOfJoining } = req.body;

  const newUser = userService.createUser({
    name,
    email,
    password,
    address,
    dateOfJoining,
    role: 'user' 
  });

  res.status(201).json(newUser);
};


export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, password, address, dateOfJoining } = req.body;

  const updatedUser = userService.updateUser(id, {
    name,
    email,
    password,
    address,
    dateOfJoining
  });

  if (!updatedUser) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  res.json(updatedUser);
};


export const deleteUser = async (req, res) => {
  const deleted = await userService.deleteUser(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.status(204).send();
};

export const login = async (req, res) => {
  const user = await userService.login(req.body.email, req.body.password);
  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  const { password, ...userWithoutPassword } = user.toObject();
  res.json({ message: 'Login bem-sucedido', token, user: userWithoutPassword });
};
