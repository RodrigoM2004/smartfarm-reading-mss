import express from 'express';
import {
  getAllSensors,
  getSensorById,
  createSensor,
  updateSensor,
  deleteSensor
} from '../controllers/sensor_controller.js';

const router = express.Router();

router.post('/', createSensor);
router.get('/', getAllSensors);
router.get('/:id', getSensorById);
router.put('/:id', updateSensor);
router.delete('/:id', deleteSensor);

export default router;
