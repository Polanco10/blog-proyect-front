import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AuthResponseData, IUser } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser = new BehaviorSubject<AuthResponseData | null>(null);

  constructor(private httpService: HttpClient) { }

  login(_user: IUser): Observable<any> {
    return this.httpService.get('./../../assets/static/user.json').pipe(
      map((res) => {
        const user = JSON.parse(JSON.stringify(res))
        if (user.email === _user.email && user.password === _user.password) {
          const loggedUser = {
            userId: "1",
            email: user.email,
            token: "token",
            expirationDate: new Date().toDateString()
          }
          this.loggedUser.next(loggedUser);
          return { status: 200, message: 'Bienvenido!' }
        }
        return { status: 200, message: 'El correo/contraseña no es válido' }
      })
    );
  }
}
