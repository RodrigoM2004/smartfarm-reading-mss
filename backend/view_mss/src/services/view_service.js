import View from "../models/view_model.js";
import { v4 as uuidv4 } from "uuid";

export const createUser = async (data) => {
  const defaultReading = {
    battery: 0,
    temperature: 0,
    humidity: 0,
    pH: 0,
    luminosity: 0,
    createdAt: Date.now(),
    readingId: uuidv4(),
  };

  const defaultSensor = {
    name: "undefined",
    latitude: 0,
    longitude: 0,
    createdAt: Date.now(),
    readingList: [defaultReading],
    sensorId: uuidv4(),
  };
  try {
    const newUser = new View({
      name: data.name,
      email: data.email,
      password: data.password,
      userId: data.userId,
      dateOfJoining: data.dateOfJoining,
      role: data.role,
      address: data.address || "",
      userId: data.userId,
      sensorList: [defaultSensor],
    });
    await newUser.save();
    return newUser;
  } catch (err) {
    console.error("Error creating user:", err);
    throw new Error(err.message);
  }
};

export const updateUser = async (userId, data) => {
  const defaultReading = {
    battery: 0,
    temperature: 0,
    humidity: 0,
    pH: 0,
    luminosity: 0,
    createdAt: Date.now(),
    readingId: uuidv4(),
  };

  const defaultSensor = {
    name: "undefined",
    latitude: 0,
    longitude: 0,
    createdAt: Date.now(),
    readingList: [defaultReading],
    sensorId: uuidv4(),
  };
  try {
    const updatedUser = await View.findOneAndUpdate(
      { userId },
      {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        address: data.address || "",
      },
      {
        new: true,
      }
    );

    return updatedUser;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const deleteUser = async (userId) => {
  const defaultReading = {
    battery: 0,
    temperature: 0,
    humidity: 0,
    pH: 0,
    luminosity: 0,
    createdAt: Date.now(),
    readingId: uuidv4(),
  };

  const defaultSensor = {
    name: "undefined",
    latitude: 0,
    longitude: 0,
    createdAt: Date.now(),
    readingList: [defaultReading],
    sensorId: uuidv4(),
  };
  try {
    const deleted = await View.findOneAndDelete({ userId });

    if (!deleted) {
      throw new Error("Usuário não encontrado");
    }
    return deleted;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};

export const createSensor = async (userId, sensorData) => {
  const defaultReading = {
    battery: 0,
    temperature: 0,
    humidity: 0,
    pH: 0,
    luminosity: 0,
    createdAt: Date.now(),
    readingId: uuidv4(),
  };

  const defaultSensor = {
    name: "undefined",
    latitude: 0,
    longitude: 0,
    createdAt: Date.now(),
    readingList: [defaultReading],
    sensorId: uuidv4(),
  };
  try {
    const user = await View.findOne({ userId });
    console.log(sensorData);
    const newSensor = {
      name: sensorData.name,
      latitude: sensorData.latitude,
      longitude: sensorData.longitude,
      createdAt: sensorData.createdAt,
      sensorId: sensorData.sensorId,
      readingList: [defaultReading],
    };

    user.sensorList.push(newSensor);
    await user.save();

    return newSensor;
  } catch (err) {
    console.error("Error creating sensor:", err);
    throw new Error(err.message);
  }
};

export const updateSensor = async (userId, sensorData) => {
  const defaultReading = {
    battery: 0,
    temperature: 0,
    humidity: 0,
    pH: 0,
    luminosity: 0,
    createdAt: Date.now(),
    readingId: uuidv4(),
  };

  const defaultSensor = {
    name: "undefined",
    latitude: 0,
    longitude: 0,
    createdAt: Date.now(),
    readingList: [defaultReading],
    sensorId: uuidv4(),
  };
  try {
    const user = await View.findOne({ userId }).select("sensorList");
    const sensor = user.sensorList.find(
      (s) => s.sensorId === sensorData.sensorId
    );
    sensor.name = sensorData.name || sensor.name;
    sensor.latitude = sensorData.latitude || sensor.latitude;
    sensor.longitude = sensorData.longitude || sensor.longitude;
    sensor.createdAt = sensorData.createdAt || sensor.createdAt;
    await user.save();
    return sensor;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const deleteSensor = async (userId, sensorId) => {
  try {
    const user = await View.findOne({ userId }).select("sensorList");
    user.sensorList = user.sensorList.filter((s) => s.sensorId !== sensorId);
    await user.save();

    return user;
  } catch (err) {
    console.error("Error deleting sensor:", err);
    throw new Error(err.message);
  }
};
