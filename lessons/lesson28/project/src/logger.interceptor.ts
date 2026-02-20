import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp ().getRequest ();
    const { url } = request;
    const now = Date.now();

    console.log('Before...', url);

    return next
      .handle()
      .pipe(tap(() => console.log(`After... ${url} ${Date.now() - now}ms`)));
  }
}
