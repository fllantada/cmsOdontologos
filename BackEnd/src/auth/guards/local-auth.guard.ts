import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
   canActivate(context: ExecutionContext) {
    console.log(context)
    return super.canActivate(context)
   } 

handleRequest(err: any, user: any, info: string){
    if (err || !user) {
        throw err || new UnauthorizedException(info)
    }
    return user 
}
}