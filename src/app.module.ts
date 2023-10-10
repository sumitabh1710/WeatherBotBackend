import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { appService } from './app.service';
import { TelegramModule } from 'nestjs-telegram';
import * as express from 'express';

@Module({
  imports: [
    TelegramModule.forRoot({
      botKey: '6460577242:AAFd15RcdAOv3M0y9KMBpKlSXVVJrsZfhuo',
    }),
  ],
  controllers: [AppController],
  providers: [appService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header(
          'Access-Control-Allow-Headers',
          'Content-Type, Authorization',
        );
        next();
      })
      .forRoutes('', '/updates');
    consumer
      .apply((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header(
          'Access-Control-Allow-Headers',
          'Content-Type, application/json',
        );
        next();
      })
      .forRoutes('/send');
  }
}
