import {
  AddDiagramDTO,
  DetailedStructuralDiagram,
} from "types/DetailedStructuralDiagram";
import axios from "./axios";

const controller = "detailed-structural-diagram";

export const addDetailedStructuralDiagram = async (
  data: AddDiagramDTO
): Promise<DetailedStructuralDiagram> => {
  const res = await axios.post<DetailedStructuralDiagram>(controller, data);
  return res.data;
};
