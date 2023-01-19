import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import strategy from 'passport-local';
import { AuthService } from '../auth.service';

const localStrategy = strategy.Strategy;

@Injectable()
export class LocalStrategy extends PassportStrategy(localStrategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
    }
    return user;
  }
}
