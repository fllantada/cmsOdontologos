import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
class JwtAuthGuard extends AuthGuard('jwt') {}

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }
  //1)   el guardia llama a canActivate con todos los datos de la request

  //esto dice pasa o no pasa true o false

  //si yo termino aca....

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const test1 = super.canActivate(context);

    //

    const request: Request = context.switchToHttp().getRequest();

    if (request.url == 'http://localhost:3000') {
      console.log('pasa por el guardia con esta url', request);
      return true;
    }

    const test2 = new JwtAuthGuard(context).canActivate(context);

    return test1 && test2;
  }
}
