import { DetailedStructuralDiagram } from "./DetailedStructuralDiagram";
import { Microservice } from "./Microservice";

export interface CreateProjectDto {
  title: string;
  description: string;
}

export interface AddHighLevelStructDiagram {
  id: string;
  diagram: string;
}

export interface Project {
  id: string;

  title: string;

  description: string;

  highLevelStructDiagram: string | null;

  microservices: Microservice[];

  detailedStructuralDiagrams: DetailedStructuralDiagram[];
}
