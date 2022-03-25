import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddHighLevelStructDiagram } from './DTO/addHighLevelStructDiagram.dto';
import { CreateProjectDto } from './DTO/create-project.dto';
import { ProjectsRepository } from './projects.repository';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectsRepository)
    private readonly projectsRepository: ProjectsRepository,
  ) {}

  createProject(project: CreateProjectDto) {
    return this.projectsRepository.createProject(project);
  }

  addHighLevelStructDiagram({ diagram, id }: AddHighLevelStructDiagram) {
    return this.projectsRepository.addHighLevelStructDiagram(id, diagram);
  }

  getAllProjects() {
    return this.projectsRepository.getAllProjects();
  }

  getById(id: string) {
    return this.projectsRepository.findOne({ id });
  }

  async deleteProject(id: string) {
    const { affected } = await this.projectsRepository.delete(id);
    return affected;
  }
}
