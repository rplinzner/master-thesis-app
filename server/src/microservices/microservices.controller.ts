import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { AddMicroservice } from './DTO/addMicroservice.dto';
import { Microservice } from './microservice.entity';
import { MicroservicesService } from './microservices.service';

@Controller('microservices')
export class MicroservicesController {
  constructor(private readonly microservicesService: MicroservicesService) {}

  @Get('/:id')
  getById(
    @Param('id') id: string,
    @Query('includeProject') includeProject: string | undefined,
  ): Promise<Microservice> {
    const addProject = includeProject === 'true';
    return this.microservicesService.getById(id, addProject);
  }

  @Post()
  addMicroservice(@Body() body: AddMicroservice): Promise<Microservice> {
    return this.microservicesService.addMicroservice(body);
  }

  @Delete('/:id')
  deleteMicroservice(@Param('id') id: string): Promise<boolean> {
    return this.microservicesService.deleteMicroservice(id);
  }
}
