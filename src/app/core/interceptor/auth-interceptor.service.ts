import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.loggedUser.pipe(
      take(1),
      exhaustMap((user) => {

        if (!user) {
          return next.handle(req)
        }
        const modifiedReq = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${user.token}`),
        });
        return next.handle(modifiedReq)
      })
    )
  }
}
