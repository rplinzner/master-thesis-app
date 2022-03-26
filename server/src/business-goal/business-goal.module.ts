import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MicroservicesModule } from 'src/microservices/microservices.module';
import { MicroservicesRepository } from 'src/microservices/microservices.repository';
import { MicroservicesService } from 'src/microservices/microservices.service';
import { ProjectsModule } from 'src/projects/projects.module';
import { BusinessGoalController } from './business-goal.controller';
import { BusinessGoalRepository } from './business-goal.repository';
import { BusinessGoalService } from './business-goal.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BusinessGoalRepository, MicroservicesRepository]),
    MicroservicesModule,
    ProjectsModule,
  ],
  controllers: [BusinessGoalController],
  providers: [BusinessGoalService, MicroservicesService],
})
export class BusinessGoalModule {}
