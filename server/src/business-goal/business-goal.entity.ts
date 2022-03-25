import { Microservice } from 'src/microservices/microservice.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BusinessGoal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('xml', { nullable: true })
  behavioralDiagram: string;

  @Column('xml', { nullable: true })
  collaborationScenario: string;

  @Column('xml', { nullable: true })
  exceptionScenario: string;

  @ManyToOne(() => Microservice, (microservice) => microservice.businessGoals, {
    eager: false,
    onDelete: 'CASCADE',
  })
  microservice: Microservice;
}
