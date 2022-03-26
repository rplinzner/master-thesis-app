import { BusinessGoal, CreateBusinessGoalDTO } from "types/BusinessGoal";

import axios from "./axios";

const controller = "business-goal";

export const addBusinessGoal = async (
  data: CreateBusinessGoalDTO
): Promise<BusinessGoal> => {
  const res = await axios.post<BusinessGoal>(controller, data);
  return res.data;
};

export const deleteBusinessGoal = async (id: string): Promise<boolean> => {
  const res = await axios.delete(`${controller}/${id}`);
  return res.data;
};

export const updateBehavioralDiagram = async (data: {
  id: string;
  xml: string;
}): Promise<boolean> => {
  const { id, xml } = data;
  const res = await axios.patch(`${controller}/${id}/behavioral`, { xml });
  return res.data;
};

export const updateCollaborationScenario = async (data: {
  id: string;
  xml: string;
}): Promise<boolean> => {
  const { id, xml } = data;
  const res = await axios.patch(`${controller}/${id}/collaboration-scenario`, {
    xml,
  });
  return res.data;
};

export const updateExceptionScenario = async (data: {
  id: string;
  xml: string;
}): Promise<boolean> => {
  const { id, xml } = data;
  const res = await axios.patch(`${controller}/${id}/exception-scenario`, {
    xml,
  });
  return res.data;
};
