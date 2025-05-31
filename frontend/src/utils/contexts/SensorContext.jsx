import { createContext, useContext, useState, useEffect } from "react";
import { sensorAPI } from "../constants/axios-instance";
import { useUser } from "./UserContext";

const SensorContext = createContext();

export function SensorProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sensorList, setSensorList] = useState([]);

  const { userData } = useUser();

  const createSensor = async (sensorData) => {
    try {
      setLoading(true);
      const response = await sensorAPI.post("/", sensorData);
      setSensorList((prev) => [...prev, response.data]);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Failed to create sensor");
    } finally {
      setLoading(false);
    }
  };

  const deleteSensor = async (sensorId) => {
    try {
      setLoading(true);
      await sensorAPI.delete(`/${sensorId}`);
      setSensorList((prev) => prev.filter((sensor) => sensor.id !== sensorId));
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Failed to delete sensor");
    } finally {
      setLoading(false);
    }
  };

  const value = {
    sensorList,
    loading,
    error,
    createSensor,
    deleteSensor,
  };

  return (
    <SensorContext.Provider value={value}>{children}</SensorContext.Provider>
  );
}

export function useSensor() {
  const context = useContext(SensorContext);
  if (!context) {
    throw new Error("useSensor must be used within a SensorProvider");
  }
  return context;
}
