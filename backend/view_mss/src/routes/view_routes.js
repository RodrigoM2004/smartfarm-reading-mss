import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  createSensor,
  updateSensor,
  deleteSensor,
} from "../controllers/view_controller.js";

const router = express.Router();

router.post("/create_user", createUser);
router.put("/update_user/:userId", updateUser);
router.delete("/delete_user/:userId", deleteUser);
router.post("/create_sensor/:userId", createSensor);
router.put("/update_sensor/:userId", updateSensor);
router.delete("/delete_sensor/:userId/:sensorId", deleteSensor);

export default router;
