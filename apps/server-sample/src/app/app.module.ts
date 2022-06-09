import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth.controller';
import { GoogleSignInService } from './google-sign-in.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController],
  providers: [AppService, GoogleSignInService],
})
export class AppModule {}
