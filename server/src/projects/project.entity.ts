import { DetailedStructuralDiagram } from 'src/detailed-structural-diagram/detailed-structural-diagram.entity';
import { Microservice } from 'src/microservices/microservice.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('xml', { nullable: true })
  highLevelStructDiagram: string | null;

  @OneToMany(() => Microservice, (microservice) => microservice.project, {
    eager: true,
    cascade: true,
  })
  microservices: Microservice[];

  @OneToMany(
    () => DetailedStructuralDiagram,
    (detailedStructuralDiagrams) => detailedStructuralDiagrams.project,
    {
      eager: true,
      cascade: true,
    },
  )
  detailedStructuralDiagrams: DetailedStructuralDiagram[];
}
