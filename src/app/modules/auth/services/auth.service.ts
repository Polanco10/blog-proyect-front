import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AuthResponseData, IAuth } from '../models/auth.interface';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // loggedUser = new BehaviorSubject<AuthResponseData | null>(null);

  constructor(private httpService: HttpClient) { }

  login(_user: IAuth): Observable<any> {
    return this.httpService.get('./../../assets/static/user.json').pipe(
      map((res) => {
        const user = JSON.parse(JSON.stringify(res))
        if (user.email === _user.email && user.password === _user.password) {
          const loggedUser: AuthResponseData = {
            userId: "1",
            email: user.email,
            token: "token",
            expirationDate: new Date().toDateString()
          }
          // this.loggedUser.next(loggedUser);
          const newUser = new User(user.email, "token", "1", new Date())
          return { status: 200, message: 'Bienvenido!', response: newUser }
        }
        return { status: 200, message: 'El correo/contraseña no es válido' }
      })
    );
  }
}
