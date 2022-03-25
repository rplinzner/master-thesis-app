import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsRepository } from 'src/projects/projects.repository';
import { ProjectsService } from 'src/projects/projects.service';
import { MicroservicesController } from './microservices.controller';
import { MicroservicesRepository } from './microservices.repository';
import { MicroservicesService } from './microservices.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MicroservicesRepository, ProjectsRepository]),
  ],
  controllers: [MicroservicesController],
  providers: [MicroservicesService, ProjectsService],
})
export class MicroservicesModule {}
