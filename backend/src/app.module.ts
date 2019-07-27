import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost/app-login',{
    useNewUrlParser:true
  })],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
