import { Microservice } from 'src/microservices/microservice.entity';
import { EntityRepository, Repository } from 'typeorm';
import { BusinessGoal } from './business-goal.entity';

@EntityRepository(BusinessGoal)
export class BusinessGoalRepository extends Repository<BusinessGoal> {
  createBusinessGoal(microservice: Microservice, name: string) {
    const obj = this.create({ name, microservice });
    return this.save(obj);
  }
}
