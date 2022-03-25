import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectsService } from 'src/projects/projects.service';
import { AddMicroservice } from './DTO/addMicroservice.dto';
import { MicroservicesRepository } from './microservices.repository';

@Injectable()
export class MicroservicesService {
  constructor(
    @InjectRepository(MicroservicesRepository)
    private readonly microservicesRepository: MicroservicesRepository,
    private readonly projectsService: ProjectsService,
  ) {}

  async addMicroservice(body: AddMicroservice) {
    const { name, projectId } = body;
    const project = await this.projectsService.getById(projectId);
    return this.microservicesRepository.addMicroService(name, project);
  }

  async deleteMicroservice(id: string) {
    return (await this.microservicesRepository.delete(id)).affected > 0;
  }

  async getById(id: string, loadRelations = false) {
    return this.microservicesRepository.findOne(
      { id },
      {
        relations: loadRelations ? ['project'] : undefined,
      },
    );
  }
}
