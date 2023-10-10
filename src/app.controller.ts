import { Controller, Get, Post, Body, Header } from '@nestjs/common';
import { appService } from './app.service';
import {
  TelegramMessage,
  TelegramUser,
  Update,
} from 'nestjs-telegram/dist/interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: appService) {}

  @Get()
  getHello(): Promise<TelegramUser> {
    return this.appService.testBot();
  }

  @Get('/updates')
  getMessage(): Promise<Update[]> {
    return this.appService.getMessage();
  }

  @Post('/send')
  @Header('content-type', 'application/json')
  sendTelegramMessage(
    @Body() requestBody: { chat_id: string; text: string },
  ): Promise<TelegramMessage> {
    return this.appService.sendMessage(requestBody);
  }
}
