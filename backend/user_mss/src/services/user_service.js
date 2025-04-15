import User from '../models/user_model.js';
import bcrypt from 'bcrypt';

export const getAllUsers = async () => await User.find();

export const getUserById = async (id) => await User.findById(id);

export const createUser = (data) => {
  const { password, role, ...userData } = data; // role é ignorado
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = { id: uuidv4(), ...userData, password: hashedPassword, role: 'user' };
  
  users.push(newUser);
  return { ...newUser, password: undefined };
};


export const updateUser = (id, data) => {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;

  const { role, ...updateData } = data; 

  users[index] = { ...users[index], ...updateData };

  return users[index];
};


export const deleteUser = async (id) => await User.findByIdAndDelete(id);

export const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) return null;
  const isMatch = bcrypt.compareSync(password, user.password);
  return isMatch ? user : null;
};
