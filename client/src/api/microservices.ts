import {
  AddMicroservice,
  Microservice,
  MicroserviceWithProject,
} from "types/Microservice";
import axios from "./axios";

const controller = "microservices";

export const addMicroservice = async (
  data: AddMicroservice
): Promise<Microservice> => {
  const res = await axios.post<Microservice>(controller, data);
  return res.data;
};

export const getMicroservice = async (
  id: string
): Promise<MicroserviceWithProject> => {
  const res = await axios.get<MicroserviceWithProject>(`${controller}/${id}`);
  return res.data;
};

export const deleteMicroservice = async (id: string): Promise<boolean> => {
  const res = await axios.delete<boolean>(`${controller}/${id}`);
  return res.data;
};
