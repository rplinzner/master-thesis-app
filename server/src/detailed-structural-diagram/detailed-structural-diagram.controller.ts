import { Body, Controller, Post } from '@nestjs/common';
import { DetailedStructuralDiagramService } from './detailed-structural-diagram.service';
import { AddDiagramDTO } from './DTO/addDiagram.dto';

@Controller('detailed-structural-diagram')
export class DetailedStructuralDiagramController {
  constructor(private readonly service: DetailedStructuralDiagramService) {}

  @Post()
  addDiagram(@Body() body: AddDiagramDTO) {
    return this.service.addDiagram(body);
  }
}
