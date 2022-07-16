import { AuthService } from './../services/auth.service';
import { exhaustMap, map } from 'rxjs/operators';
import { loginStart, loginSuccess } from './auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { IAuth } from '../models/auth.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
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

  // loginRedirect$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(...[loginSuccess, signupSuccess]),
  //       tap((action) => {
  //         this.store.dispatch(setErrorMessage({ message: '' }));
  //         if (action.redirect) {
  //           this.router.navigate(['/']);
  //         }
  //       })
  //     );
  //   },
  //   { dispatch: false }
  // );

  // signUp$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(signupStart),
  //     exhaustMap((action) => {
  //       return this.authService.signUp(action.email, action.password).pipe(
  //         map((data) => {
  //           this.store.dispatch(setLoadingSpinner({ status: false }));
  //           const user = this.authService.formatUser(data);
  //           this.authService.setUserInLocalStorage(user);
  //           return signupSuccess({ user, redirect: true });
  //         }),
  //         catchError((errResp) => {
  //           this.store.dispatch(setLoadingSpinner({ status: false }));
  //           const errorMessage = this.authService.getErrorMessage(
  //             errResp.error.error.message
  //           );
  //           return of(setErrorMessage({ message: errorMessage }));
  //         })
  //       );
  //     })
  //   );
  // });

  // autoLogin$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(autoLogin),
  //     mergeMap((action) => {
  //       const user = this.authService.getUserFromLocalStorage();
  //       return of(loginSuccess({ user, redirect: false }));
  //     })
  //   );
  // });

  // logout$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(autoLogout),
  //       map((action) => {
  //         this.authService.logout();
  //         this.router.navigate(['auth']);
  //       })
  //     );
  //   },
  //   { dispatch: false }
  // );
}
