import { Microservice } from 'src/microservices/microservice.entity';
import { Project } from 'src/projects/project.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  Column,
} from 'typeorm';

@Entity()
export class DetailedStructuralDiagram {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Microservice, { eager: true })
  @JoinColumn()
  firstMicroservice: Microservice;

  @OneToOne(() => Microservice, { eager: true })
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
