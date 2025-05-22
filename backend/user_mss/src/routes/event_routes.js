import express from 'express';
import { updateUserByUserId } from '../services/user_service';

const router = express.Router();

const functions = {
  SensorCreate: async (data) => {
    await updateUserByUserId(data.userId, data.sensor)
  },
}

router.post('/', (req, res) => {
  const event = req.body
  functions[event.type](event.data)
  res.end()  
});

export default router;
