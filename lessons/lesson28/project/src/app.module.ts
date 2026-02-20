import { Module, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';

import { LoggerMiddleware } from './logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';
import { AnimalsModule } from './animals/animals.module';
// import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    AnimalsModule,
    ConfigModule,
    DatabaseModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
  ],
  controllers: [AppController, CatsController, DogsController],
  providers: [
    AppService, // Стандартная регистрация
    {
      provide: DogsService,
      useClass: DogsService,
    },
  ],
  // exports: [
  //   AuthGuard
  // ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
