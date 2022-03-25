import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { MicroservicesModule } from './microservices/microservices.module';
import { DetailedStructuralDiagramModule } from './detailed-structural-diagram/detailed-structural-diagram.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProjectsModule,
    MicroservicesModule,
    DetailedStructuralDiagramModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
