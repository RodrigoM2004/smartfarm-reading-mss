import Reading from "../models/reading_model.js";
import axios from "axios";

export const getAllReadings = async () => await Reading.find();

export const getReadingById = async (id) => await Reading.findById(id);

export const createReading = async (data, userId) => {
  const newReading = new Reading(data);
  await newReading.save();
  await axios.post("http://localhost:3004/event", {
    type: "ReadingCreateView",
    params: {
      userId: userId,
      sensorId: data.sensorId,
    },
    data: {
      reading_data: newReading,
    },
  });
  return newReading.toObject();
};

export const updateReading = async (readingId, data, userId, sensorId) => {
  const updatedReading = await Reading.findOneAndUpdate({ readingId }, data, {
    new: true,
  });
  await axios.post("http://localhost:3004/event", {
    type: "ReadingUpdateView",
    params: {
      userId: userId,
      sensorId: sensorId,
      readingId: readingId,
    },
    data: {
      reading_data: updatedReading,
    },
  });
  return updatedReading;
};

export const deleteReading = async (readingId, sensorId, userId) => {
  const deleted = await Reading.findOneAndDelete({ readingId });
  await axios.post("http://localhost:3004/event", {
    type: "ReadingDeleteView",
    params: {
      userId: userId,
      sensorId: sensorId,
      readingId: readingId,
    },
  });
  return deleted;
};
