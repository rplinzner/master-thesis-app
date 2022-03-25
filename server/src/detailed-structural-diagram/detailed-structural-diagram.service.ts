import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MicroservicesService } from 'src/microservices/microservices.service';
import { ProjectsService } from 'src/projects/projects.service';
import { DetailedStructuralDiagramRepository } from './detailed-structural-diagram.repository';
import { AddDiagramDTO } from './DTO/addDiagram.dto';

@Injectable()
export class DetailedStructuralDiagramService {
  constructor(
    @InjectRepository(DetailedStructuralDiagramRepository)
    private readonly repository: DetailedStructuralDiagramRepository,
    private readonly projectsService: ProjectsService,
    private readonly microservicesService: MicroservicesService,
  ) {}

  async addDiagram(data: AddDiagramDTO) {
    const { diagram, firstMicroserviceId, secondMicroserviceId, projectId } =
      data;

    const project = await this.projectsService.getById(projectId);
    const firstMicroService = await this.microservicesService.getById(
      firstMicroserviceId,
    );
    const secondMicroservice = await this.microservicesService.getById(
      secondMicroserviceId,
    );

    return this.repository.addDiagram(
      firstMicroService,
      secondMicroservice,
      project,
      diagram,
    );
  }
}
