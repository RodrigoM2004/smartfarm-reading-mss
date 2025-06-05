import express from "express";
import {
  getAllReadings,
  getReadingById,
  createReading,
  updateReading,
  deleteReading,
} from "../controllers/reading_controller.js";
import {
  authenticateToken,
  authorizeReadingUserOrAdmin,
} from "../middleware/middleware.js";

const router = express.Router();

router.post("/", authenticateToken, createReading);

router.get("/", authenticateToken, getAllReadings);
router.get(
  "/:id",
  authenticateToken,
  authorizeReadingUserOrAdmin,
  getReadingById
);
router.put(
  "/:id/:sensorId",
  authenticateToken,
  authorizeReadingUserOrAdmin,
  updateReading
);
router.delete(
  "/:id/:sensorId",
  authenticateToken,
  authorizeReadingUserOrAdmin,
  deleteReading
);

export default router;
