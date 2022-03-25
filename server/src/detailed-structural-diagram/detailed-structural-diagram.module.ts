import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailedStructuralDiagramRepository } from './detailed-structural-diagram.repository';
import { DetailedStructuralDiagramService } from './detailed-structural-diagram.service';
import { DetailedStructuralDiagramController } from './detailed-structural-diagram.controller';
import { MicroservicesService } from 'src/microservices/microservices.service';
import { ProjectsService } from 'src/projects/projects.service';
import { MicroservicesRepository } from 'src/microservices/microservices.repository';
import { ProjectsRepository } from 'src/projects/projects.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DetailedStructuralDiagramRepository,
      MicroservicesRepository,
      ProjectsRepository,
    ]),
  ],
  providers: [
    DetailedStructuralDiagramService,
    MicroservicesService,
    ProjectsService,
  ],
  controllers: [DetailedStructuralDiagramController],
})
export class DetailedStructuralDiagramModule {}
