import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProjectDto } from './create-project.dto';
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

  getAllProjects(): Promise<Project[]> {
    return this.find();
  }

  // async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
  //   const { search, status } = filterDto;

  //   const query = this.createQueryBuilder('task');
  //   query.where({ user });
  //   if (status) query.andWhere('task.status = :status', { status });

  //   if (search) {
  //     query.andWhere(
  //       '(LOWER(task.title) LIKE :search OR LOWER(task.description) LIKE :search)',
  //       { search: `%${search.toLowerCase()}%` },
  //     );
  //   }

  //   try {
  //     const tasks = await query.getMany();
  //     return tasks;
  //   } catch (error) {
  //     this.logger.error(
  //       `failed to get tasks for user ${
  //         user.username
  //       }, filters: ${JSON.stringify(filterDto)}`,
  //       error.stack,
  //     );
  //     throw new InternalServerErrorException();
  //   }
  // }
}
