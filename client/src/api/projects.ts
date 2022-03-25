import axios from "./axios";
import {
  AddHighLevelStructDiagram,
  CreateProjectDto,
  Project,
} from "types/Project";

const controller = "projects";

export const addNewProject = async (
  data: CreateProjectDto
): Promise<Project> => {
  const res = await axios.post<Project>(controller, data);
  return res.data;
};

export const addHighLevelStructDiagram = async (
  data: AddHighLevelStructDiagram
): Promise<boolean> => {
  const res = await axios.patch<boolean>(
    `${controller}/highLevelStructDiagram`,
    data
  );
  return res.data;
};

export const getAll = async (): Promise<Project[]> => {
  const res = await axios.get(controller);
  return res.data;
};

export const getById = async (id: string): Promise<Project> => {
  const res = await axios.get(`${controller}/${id}`);
  return res.data;
};
