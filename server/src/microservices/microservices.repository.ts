import { Project } from 'src/projects/project.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Microservice } from './microservice.entity';

@EntityRepository(Microservice)
export class MicroservicesRepository extends Repository<Microservice> {
  addMicroService(name: string, project: Project): Promise<Microservice> {
    const microservice = this.create({ name, project });

    return this.save(microservice);
  }
}
