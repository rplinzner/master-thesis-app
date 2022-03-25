import { BusinessGoal } from "./BusinessGoal";
import { Project } from "./Project";

export interface AddMicroservice {
  projectId: string;
  name: string;
}

export interface Microservice {
  id: string;

  name: string;

  goals: BusinessGoal[];
}

export interface MicroserviceWithProject extends Microservice {
  project: Project;
}
