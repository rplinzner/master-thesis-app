import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AddHighLevelStructDiagram } from './DTO/addHighLevelStructDiagram.dto';
import { CreateProjectDto } from './DTO/create-project.dto';
import { Project } from './project.entity';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getAll(): Promise<Project[]> {
    return this.projectsService.getAllProjects();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.projectsService.getById(id);
  }

  @Post()
  createProject(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectsService.createProject(createProjectDto);
  }

  @Patch('/highLevelStructDiagram')
  addHighLevelStructDiagram(
    @Body() createProjectDto: AddHighLevelStructDiagram,
  ): Promise<boolean> {
    return this.projectsService.addHighLevelStructDiagram(createProjectDto);
  }

  @Delete('/:id')
  deleteProject(@Param('id') id: string) {
    return this.projectsService.deleteProject(id);
  }
}
