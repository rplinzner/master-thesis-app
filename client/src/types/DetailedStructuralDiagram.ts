import { Microservice } from "./Microservice";

export interface DetailedStructuralDiagram {
  id: string;

  firstMicroservice: Microservice;

  secondMicroservice: Microservice;

  diagram: string | null;
}

export interface AddDiagramDTO {
  firstMicroserviceId: string;
  secondMicroserviceId: string;
  projectId: string;
  diagram: string;
}
