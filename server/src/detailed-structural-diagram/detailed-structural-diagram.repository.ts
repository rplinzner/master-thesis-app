import { Microservice } from 'src/microservices/microservice.entity';
import { Project } from 'src/projects/project.entity';
import { EntityRepository, Repository } from 'typeorm';
import { DetailedStructuralDiagram } from './detailed-structural-diagram.entity';

@EntityRepository(DetailedStructuralDiagram)
export class DetailedStructuralDiagramRepository extends Repository<DetailedStructuralDiagram> {
  addDiagram(
    firstMicroservice: Microservice,
    secondMicroservice: Microservice,
    project: Project,
    xml: string,
  ) {
    const diagram = this.create({
      firstMicroservice,
      secondMicroservice,
      project,
      diagram: xml,
    });

    return this.save(diagram);
  }
}
