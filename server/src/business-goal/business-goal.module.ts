import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessGoalController } from './business-goal.controller';
import { BusinessGoalRepository } from './business-goal.repository';
import { BusinessGoalService } from './business-goal.service';

@Module({
  imports: [TypeOrmModule.forFeature([BusinessGoalRepository])],
  controllers: [BusinessGoalController],
  providers: [BusinessGoalService],
})
export class BusinessGoalModule {}
