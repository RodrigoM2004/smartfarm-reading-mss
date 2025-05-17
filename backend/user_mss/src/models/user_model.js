const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
  userId: { type: String, unique: true, default: uuidv4 },
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {type: String, enum: ['user-basic', 'user-intermediary', 'user-premium', 'admin'], default: 'user-basic'},
  address: { type: String, required: true },
  dateOfJoining: { type: Number, default: () => Date.now() },
  sensors: { type: [mongoose.Schema.Types.Mixed], default: [] }
});


export default mongoose.model('User', userSchema);
