import axios from "./axios";
import {
  AddHighLevelStructDiagram,
  CreateProjectDto,
  Project,
} from "types/Project";

export const addNewProject = async (
  data: CreateProjectDto
): Promise<Project> => {
  const res = await axios.post<Project>("projects", data);
  return res.data;
};

export const addHighLevelStructDiagram = async (
  data: AddHighLevelStructDiagram
): Promise<boolean> => {
  const res = await axios.patch<boolean>(
    "projects/highLevelStructDiagram",
    data
  );
  return res.data;
};

export const getAll = async (): Promise<Project[]> => {
  const res = await axios.get("projects");
  return res.data;
};

export const getById = async (id: string): Promise<Project> => {
  const res = await axios.get(`projects/${id}`);
  return res.data;
};
