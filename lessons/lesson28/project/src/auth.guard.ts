import { Injectable, CanActivate, ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Observable } from 'rxjs';

export enum Role {
  admin = 'admin',
  user = 'user'
};

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private roles: Role[]) {
    console.log('this.roles', this.roles);
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // token -> user

    console.log('this.roles', this.roles);
    console.log('request.headers.token', request.headers.token);

    // Получаю токен и проверяю
    const isCorrectToken = request.headers.token === 'password';

    if (!isCorrectToken) {
      return false; // 401
    }

    // Сходить в бд и получить юзера

    const user = {
      username: 'nik',
      role: Role.user
    };

    if (!this.roles.includes(user.role)) {
      return false; // Выбросить ошибку 403
    }

    // Как реализовать сложнее передачу юзера 
    // -> хранить requestId и бд(redis) по requestId мета информацию

    request.user = user;

    return true;
  }
}

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string => {
    // Здесь получать user-а более сложным способом.
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);

// Несколько декораторов под разные части.
// Не User, а userid

// Basic Auth.
// JWT + Oauth.
