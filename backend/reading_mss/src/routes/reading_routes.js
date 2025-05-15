import express from 'express';
import {
  getAllReadings,
  getReadingById,
  createReading,
  updateReading,
  deleteReading
} from '../controllers/reading_controller.js';

const router = express.Router();

router.post('/', createReading);

router.get('/', getAllReadings);
router.get('/:id', getReadingById);
router.put('/:id', updateReading);
router.delete('/:id', deleteReading);

export default router;
