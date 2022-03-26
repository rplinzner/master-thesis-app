import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BusinessGoalService } from './business-goal.service';
import { CreateBusinessGoalDTO } from './DTO/CreateBusinessGoal.dto';

@Controller('business-goal')
export class BusinessGoalController {
  constructor(private readonly service: BusinessGoalService) {}

  @Post()
  createBusinessGoal(@Body() body: CreateBusinessGoalDTO) {
    return this.service.createBusinessGoal(body);
  }

  @Delete('/:id')
  deleteBusinessGoal(@Param('id') id: string) {
    return this.service.deleteBusinessGoal(id);
  }

  @Patch('/:id/behavioral')
  updateBehavioralDiagram(
    @Param('id') id: string,
    @Body() { xml }: { xml: string },
  ) {
    return this.service.updateBehavioralDiagram(id, xml);
  }

  @Patch('/:id/collaboration-scenario')
  updateCollaborationScenario(
    @Param('id') id: string,
    @Body() { xml }: { xml: string },
  ) {
    return this.service.updateCollaborationScenario(id, xml);
  }

  @Patch('/:id/exception-scenario')
  updateExceptionScenario(
    @Param('id') id: string,
    @Body() { xml }: { xml: string },
  ) {
    return this.service.updateExceptionScenario(id, xml);
  }
}
