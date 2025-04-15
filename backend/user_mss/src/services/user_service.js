import User from '../models/user_model.js';
import bcrypt from 'bcrypt';

export const getAllUsers = async () => await User.find();

export const getUserById = async (id) => await User.findById(id);

export const createUser = async (data) => {
  try {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      throw new Error('Email já registrado');
    }

    const hashedPassword = bcrypt.hashSync(data.password, 10);

    const userData = {
      ...data,
      password: hashedPassword,
      role: 'user', 
    };

    const newUser = new User(userData);

    await newUser.save();

    const userObj = newUser.toObject();
    delete userObj.password;
    return userObj;
  } catch (err) {
    throw new Error(err.message); 
  }
};

export const updateUser = async (id, data) => {
  try {
    if (data.password) {
      data.password = bcrypt.hashSync(data.password, 10);
    }

    if (data.role) {
      throw new Error('Você não pode alterar o campo "role"');
    }

    const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
    return updatedUser;
  } catch (err) {
    throw new Error(err.message); 
  }
};

export const deleteUser = async (id) => await User.findByIdAndDelete(id);

export const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) return null;

  const isMatch = bcrypt.compareSync(password, user.password);
  return isMatch ? user : null;
};
