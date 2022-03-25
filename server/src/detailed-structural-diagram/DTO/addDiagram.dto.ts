export class AddDiagramDTO {
  firstMicroserviceId: string;
  secondMicroserviceId: string;
  projectId: string;
  diagram: string;
}

export class UpdateDiagramDTO {
  id: string;
  diagram: string;
}
