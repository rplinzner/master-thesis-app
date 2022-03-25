import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { AddMicroservice } from './DTO/addMicroservice.dto';
import { MicroservicesService } from './microservices.service';

@Controller('microservices')
export class MicroservicesController {
  constructor(private readonly microservicesService: MicroservicesService) {}

  @Post()
  addMicroservice(@Body() body: AddMicroservice) {
    return this.microservicesService.addMicroservice(body);
  }

  @Delete('/:id')
  deleteMicroservice(@Param('id') id: string): Promise<boolean> {
    return this.microservicesService.deleteMicroservice(id);
  }
}
