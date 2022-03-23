import axios from "./axios";
import { CreateProjectDto, Project } from "types/Project";

export const addNewProject = async (
  data: CreateProjectDto
): Promise<Project> => {
  const res = await axios.post<Project>("projects", data);
  return res.data;
};

export const getAll = async (): Promise<Project[]> => {
  const res = await axios.get("projects");
  return res.data;
};
