import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProjectDto } from './DTO/create-project.dto';
import { Project } from './project.entity';

@EntityRepository(Project)
export class ProjectsRepository extends Repository<Project> {
  private logger = new Logger(ProjectsRepository.name, { timestamp: true });
  async createProject(createTaskDto: CreateProjectDto): Promise<Project> {
    const { description, title } = createTaskDto;

    this.logger.log({ createTaskDto });

    const task = this.create({
      description,
      title,
    });

    return this.save(task);
  }

  async addHighLevelStructDiagram(
    id: string,
    diagram: string,
  ): Promise<boolean> {
    const { affected } = await this.update(id, {
      highLevelStructDiagram: diagram,
    });
    return affected > 0;
  }

  getAllProjects(): Promise<Project[]> {
    return this.find();
  }
}
