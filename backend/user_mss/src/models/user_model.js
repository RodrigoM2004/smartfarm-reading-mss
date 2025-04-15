import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user', required: true },
  address: { type: String, required: true },
  dateOfJoining: { type: Number, required: true }
});


export default mongoose.model('User', userSchema);
