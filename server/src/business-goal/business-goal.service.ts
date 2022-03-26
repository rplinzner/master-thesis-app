import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MicroservicesService } from 'src/microservices/microservices.service';
import { BusinessGoalRepository } from './business-goal.repository';
import { CreateBusinessGoalDTO } from './DTO/CreateBusinessGoal.dto';

@Injectable()
export class BusinessGoalService {
  constructor(
    @InjectRepository(BusinessGoalRepository)
    private readonly repository: BusinessGoalRepository,
    private readonly microservicesService: MicroservicesService,
  ) {}

  async createBusinessGoal(data: CreateBusinessGoalDTO) {
    const { microserviceId, name } = data;
    const microservice = await this.microservicesService.getById(
      microserviceId,
    );
    return this.repository.createBusinessGoal(microservice, name);
  }

  async deleteBusinessGoal(id: string) {
    const { affected } = await this.repository.delete(id);
    return affected > 0;
  }

  async updateBehavioralDiagram(id: string, xml: string) {
    const { affected } = await this.repository.update(id, {
      behavioralDiagram: xml,
    });
    return affected > 0;
  }

  async updateCollaborationScenario(id: string, xml: string) {
    const { affected } = await this.repository.update(id, {
      collaborationScenario: xml,
    });
    return affected > 0;
  }

  async updateExceptionScenario(id: string, xml: string) {
    const { affected } = await this.repository.update(id, {
      exceptionScenario: xml,
    });
    return affected > 0;
  }
}
