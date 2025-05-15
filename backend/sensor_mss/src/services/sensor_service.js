import Sensor from '../models/sensor_model.js';

export const getAllSensors = async () => await Sensor.find();

export const getSensorById = async (id) => await Sensor.findById(id);

export const createSensor = async (data) => {
  const newSensor = new Sensor(data);
  await newSensor.save();
  return newSensor.toObject();
};

export const updateSensor = async (id, data) => {
  const updatedSensor = await Sensor.findByIdAndUpdate(id, data, { new: true });
  return updatedSensor;
};

export const deleteSensor = async (id) => await Sensor.findByIdAndDelete(id);
