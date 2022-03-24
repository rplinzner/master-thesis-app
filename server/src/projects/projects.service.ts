import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDto } from './create-project.dto';
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

  getAllProjects() {
    return this.projectsRepository.getAllProjects();
  }

  getById(id: string) {
    return this.projectsRepository.findOne({ id });
  }
}
