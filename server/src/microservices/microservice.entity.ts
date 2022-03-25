import { BusinessGoal } from 'src/business-goal/business-goal.entity';
import { Project } from 'src/projects/project.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Microservice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => BusinessGoal, (businessGoal) => businessGoal.microservice, {
    eager: true,
    cascade: true,
  })
  businessGoals: BusinessGoal[];

  @ManyToOne(() => Project, (project) => project.microservices, {
    eager: false,
    onDelete: 'CASCADE',
  })
  project: Project;
}
