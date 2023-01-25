import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FrontEndStrategy } from '../strategies/front-end.strategy';




@Injectable()
export class FrontEndAuthGuard extends AuthGuard('local') {
 constructor(private readonly frontEndStrategy: FrontEndStrategy){
    super()
 }

    canActivate(context: ExecutionContext){
        const request = context.switchToHttp().getRequest()
        const token = request.rawHeaders[1].split(' ')[1]
        return this.frontEndStrategy.validate(token)
    }

    handleRequest(err: any, user: any, info: any) {
        console.log(user)
        if (err || !user) {
          throw err || new UnauthorizedException(info);
        }
        return user;
    }
}