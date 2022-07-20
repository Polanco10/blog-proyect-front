import { AuthService } from './../services/auth.service';
import { exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs'
import { loginStart, loginSuccess, autoLogin, autoLogout, } from './auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IAuth } from '../models/auth.interface';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router

  ) { }


  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        const user: IAuth = { email: action.auth.email, password: action.auth.password }
        return this.authService.login(user).pipe(
          map((data) => {
            localStorage.setItem('userData', JSON.stringify(data.response));
            return loginSuccess({ user: data.response, redirect: true });
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap((action) => {
          if (action.redirect) {
            this.router.navigate(['/']);
          }
        })
      );
    },
    { dispatch: false }
  );

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLogin),
      mergeMap((action) => {
        const user = this.authService.getUserFromLocalStorage();
        return of(loginSuccess({ user, redirect: false }));
      })
    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(autoLogout),
        map((action) => {
          this.authService.logout();
          this.router.navigate(['auth/login']);
        })
      );
    },
    { dispatch: false }
  );
}
