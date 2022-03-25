import { Body, Controller, Post } from '@nestjs/common';
import { AddMicroservice } from './DTO/addMicroservice.dto';
import { MicroservicesService } from './microservices.service';

@Controller('microservices')
export class MicroservicesController {
  constructor(private readonly microservicesService: MicroservicesService) {}

  @Post()
  addMicroController(@Body() body: AddMicroservice) {
    return this.microservicesService.addMicroservice(body);
  }
}
