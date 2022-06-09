import { Body, Controller, Post } from '@nestjs/common';
import { GoogleSignInService } from './google-sign-in.service';

@Controller('auth')
export class AuthController {
  constructor(private googleSignInSvc: GoogleSignInService) {}

  @Post('verifyGoogle')
  async verifyGoogle(@Body() body: { idToken: string }) {
    console.log(body);
    return await this.googleSignInSvc.verifyToken(body.idToken);
  }
}
