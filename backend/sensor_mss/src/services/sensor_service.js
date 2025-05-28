import Sensor from "../models/sensor_model.js";
import axios from "axios";

export const getAllSensors = async () => await Sensor.find();

export const getSensorById = async (sensorId) => {
  return await Sensor.findOne({ sensorId });
};

export const createSensor = async (data, userId) => {
  const newSensor = new Sensor(data);
  await newSensor.save();
  await axios.post(
    `http://localhost:3003/view/create_sensor/${userId}`,
    newSensor
  );
  return newSensor.toObject();
};

export const addReading = async (sensorId, readingId) => {
  try {
    return await Sensor.findOneAndUpdate(
      { sensorId },
      { $addToSet: { readingList: readingId } },
      { new: true }
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

export const updateSensor = async (id, data) => {
  const updatedSensor = await Sensor.findByIdAndUpdate(id, data, { new: true });
  return updatedSensor;
};

export const deleteSensor = async (sensorId) => {
  return await Sensor.findOneAndDelete({ sensorId: sensorId });
};
