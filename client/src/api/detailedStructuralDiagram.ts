import {
  AddDiagramDTO,
  DetailedStructuralDiagram,
  UpdateDiagramDTO,
} from "types/DetailedStructuralDiagram";
import axios from "./axios";

const controller = "detailed-structural-diagram";

export const addDetailedStructuralDiagram = async (
  data: AddDiagramDTO
): Promise<DetailedStructuralDiagram> => {
  const res = await axios.post<DetailedStructuralDiagram>(controller, data);
  return res.data;
};

export const updateDetailedStructuralDiagram = async (
  data: UpdateDiagramDTO
): Promise<boolean> => {
  const res = await axios.patch<boolean>(controller, data);
  return res.data;
};

export const deleteDetailedStructuralDiagram = async (
  id: string
): Promise<boolean> => {
  const res = await axios.delete<boolean>(`${controller}/${id}`);
  return res.data;
};
