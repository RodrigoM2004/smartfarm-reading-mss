import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  createSensor,
  updateSensor,
  deleteSensor,
  createReading,
  deleteReading,
  updateReading,
  getUserView,
} from "../controllers/view_controller.js";

const router = express.Router();

router.post("/create_user", createUser);
router.put("/update_user/:userId", updateUser);
router.delete("/delete_user/:userId", deleteUser);
router.post("/create_sensor/:userId", createSensor);
router.put("/update_sensor/:userId", updateSensor);
router.delete("/delete_sensor/:userId/:sensorId", deleteSensor);
router.post("/create_reading/:userId/:sensorId", createReading);
router.delete("/delete_reading/:userId/:sensorId/:readingId", deleteReading);
router.put("/update_reading/:userId/:sensorId/:readingId", updateReading);
router.get("/get_user_view/:userId", getUserView);

export default router;
