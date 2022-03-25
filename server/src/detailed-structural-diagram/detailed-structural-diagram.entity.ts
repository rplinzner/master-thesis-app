import { Microservice } from 'src/microservices/microservice.entity';
import { Project } from 'src/projects/project.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  Column,
} from 'typeorm';

@Entity()
export class DetailedStructuralDiagram {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Microservice, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  firstMicroservice: Microservice;

  @ManyToOne(() => Microservice, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  secondMicroservice: Microservice;

  @Column('xml')
  diagram: string;

  @ManyToOne(() => Project, (project) => project.microservices, {
    eager: false,
    onDelete: 'CASCADE',
  })
  project: Project;
}
