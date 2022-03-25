import { Microservice } from 'src/microservices/microservice.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BusinessGoal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('xml', { nullable: true })
  behavioralDiagram: string | null;

  @Column('xml', { nullable: true })
  collaborationScenario: string | null;

  @Column('xml', { nullable: true })
  exceptionScenario: string | null;

  @ManyToOne(() => Microservice, (microservice) => microservice.goals, {
    eager: false,
    onDelete: 'CASCADE',
  })
  microservice: Microservice;
}
