import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { ProjectsRepository } from './projects.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectsRepository])],
  providers: [ProjectsService],
  controllers: [ProjectsController],
})
export class ProjectsModule {}
