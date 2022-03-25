import { Microservice } from "./Microservice";

export interface DetailedStructuralDiagram {
  id: string;

  firstMicroservice: Microservice;

  secondMicroservice: Microservice;

  diagram: string;
}

export interface AddDiagramDTO {
  firstMicroserviceId: string;
  secondMicroserviceId: string;
  projectId: string;
  diagram: string;
}

export interface UpdateDiagramDTO {
  id: string;
  diagram: string;
}
