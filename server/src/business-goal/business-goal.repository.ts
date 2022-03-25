import { EntityRepository, Repository } from 'typeorm';
import { BusinessGoal } from './business-goal.entity';

@EntityRepository(BusinessGoal)
export class BusinessGoalRepository extends Repository<BusinessGoal> {}
