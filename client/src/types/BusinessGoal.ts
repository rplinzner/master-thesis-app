export interface BusinessGoal {
  id: string;

  name: string;

  behavioralDiagram: string | null;

  collaborationScenario: string | null;

  exceptionScenario: string | null;
}

export interface CreateBusinessGoalDTO {
  microserviceId: string;
  name: string;
}
