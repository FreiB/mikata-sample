import { Injectable } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { UserInfo } from './user-info';

@Injectable()
export class GoogleSignInService {
  async verifyToken(token: string): Promise<UserInfo> {
    const clientId =
      '579301942246-isosmvg0r23nrmb96nlri37sm81vrho6.apps.googleusercontent.com';
    const client = new OAuth2Client();
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: clientId,
    });

    const payload = ticket.getPayload();
    const user: UserInfo = {
      firstName: payload.given_name,
      lastName: payload.family_name,
      pictureUrl: payload.picture,
    };

    return user;
  }
}
