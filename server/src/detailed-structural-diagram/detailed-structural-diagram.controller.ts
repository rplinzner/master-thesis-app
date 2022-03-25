import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { DetailedStructuralDiagramService } from './detailed-structural-diagram.service';
import { AddDiagramDTO, UpdateDiagramDTO } from './DTO/addDiagram.dto';

@Controller('detailed-structural-diagram')
export class DetailedStructuralDiagramController {
  constructor(private readonly service: DetailedStructuralDiagramService) {}

  @Post()
  addDiagram(@Body() body: AddDiagramDTO) {
    return this.service.addDiagram(body);
  }

  @Patch()
  updateDiagram(@Body() body: UpdateDiagramDTO) {
    return this.service.updateDiagram(body);
  }

  @Delete('/:id')
  deleteDiagram(@Param('id') id: string) {
    return this.service.deleteDiagram(id);
  }
}
