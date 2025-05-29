import { createContext, useContext, useState, useEffect } from "react";
import { sensorAPI } from "../constants/axios-instance";
import { useUser } from "./UserContext";

const SensorContext = createContext();

export function SensorProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sensorList, setSensorList] = useState([]);

  const { userData } = useUser();

  const fetchSensorData = async () => {
    try {
      setLoading(true);

      const responses = await Promise.all(
        userData.sensorList.map((sensor) => sensorAPI.get(`/${sensor}`))
      );

      const uniqueSensors = [];
      const seen = new Set();


      for (const res of responses) {
        if (!seen.has(res.data._id)) {
          seen.add(res.data._id);
          uniqueSensors.push(res.data);
        }
      }
    
      setSensorList(uniqueSensors);
      setError(null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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

  const value = {
    sensorList,
    loading,
    error,
    fetchSensorData,
    createSensor,
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
