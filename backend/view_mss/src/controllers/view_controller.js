import * as viewService from "../services/view_service.js";

export const createUser = async (req, res) => {
  try {
    const newUser = await viewService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: `Erro ao criar usuário: ${err.message}` });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const updatedUser = await viewService.updateUser(userId, req.body);
    res.status(200).json(updatedUser);
  } catch (err) {
    res
      .status(400)
      .json({ message: `Erro ao atualizar usuário: ${err.message}` });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    await viewService.deleteUser(userId);
    res.status(204).send();
  } catch (err) {
    res
      .status(400)
      .json({ message: `Erro ao deletar usuário: ${err.message}` });
  }
};

export const createSensor = async (req, res) => {
  try {
    const { userId } = req.params;
    const newSensor = await viewService.createSensor(userId, req.body);
    res.status(201).json(newSensor);
  } catch (err) {
    res.status(400).json({ message: `Erro ao criar sensor: ${err.message}` });
  }
};

export const updateSensor = async (req, res) => {
  try {
    const { userId } = req.params;
    const updatedSensor = await viewService.updateSensor(userId, req.body);
    res.status(200).json(updatedSensor);
  } catch (err) {
    res
      .status(400)
      .json({ message: `Erro ao atualizar sensor: ${err.message}` });
  }
};

export const deleteSensor = async (req, res) => {
  try {
    const { userId, sensorId } = req.params;
    await viewService.deleteSensor(userId, sensorId);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ message: `Erro ao deletar sensor: ${err.message}` });
  }
};
