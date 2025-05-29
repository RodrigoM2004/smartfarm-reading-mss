import Reading from "../models/reading_model.js";
import axios from "axios";

export const getAllReadings = async () => await Reading.find();

export const getReadingById = async (id) => await Reading.findById(id);

export const createReading = async (data, userId) => {
  const newReading = new Reading(data);
  await newReading.save();
  await axios.post(
    `http://localhost:3003/view/create_reading/${userId}/${data.sensorId}`,
    newReading
  );
  return newReading.toObject();
};

export const updateReading = async (readingId, data, userId, sensorId) => {
  const updatedReading = await Reading.findOneAndUpdate({ readingId }, data, {
    new: true,
  });
  await axios.put(
    `http://localhost:3003/view/update_reading/${userId}/${sensorId}/${readingId}`,
    updatedReading
  );
  return updatedReading;
};

export const deleteReading = async (readingId, sensorId, userId) => {
  const deleted = await Reading.findOneAndDelete({ readingId });
  await axios.delete(
    `http://localhost:3003/view/delete_reading/${userId}/${sensorId}/${readingId}`
  );
  return deleted;
};
