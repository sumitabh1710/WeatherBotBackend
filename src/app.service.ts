import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  TelegramMessage,
  TelegramUser,
  Update,
} from 'nestjs-telegram/dist/interfaces';
import { TelegramService } from 'nestjs-telegram/dist/telegram.service';

@Injectable()
export class appService {
  constructor(private readonly telegram: TelegramService) {}

  testBot(): Promise<TelegramUser> {
    return this.telegram.getMe().toPromise();
  }

  getMessage(): Promise<Update[]> {
    return this.telegram.getUpdates({ timeout: 1 }).toPromise();
  }

  sendMessage(requestBody): Promise<TelegramMessage> {
    return this.telegram.sendMessage(requestBody).toPromise();
  }
}
