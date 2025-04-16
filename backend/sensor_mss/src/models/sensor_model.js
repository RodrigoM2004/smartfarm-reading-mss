import mongoose from 'mongoose';

const sensorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  userId: { type: String, ref: 'User', required: true }, 
  createdAt: { type: Number, required: true }
});

export default mongoose.model('Sensor', sensorSchema);
