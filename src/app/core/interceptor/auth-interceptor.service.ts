import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { getToken } from 'src/app/modules/auth/store/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private store: Store<AppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getToken).pipe(
      take(1),
      exhaustMap((user) => {
        console.log(user)
        if (!user) {
          return next.handle(req)
        }
        const modifiedReq = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${user}`),
        });
        return next.handle(modifiedReq)
      })
    )
  }
}
