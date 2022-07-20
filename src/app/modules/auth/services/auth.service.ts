import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IAuth } from '../models/auth.interface';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpClient) { }

  login(_user: IAuth): Observable<any> {
    return this.httpService.get('./../../assets/static/user.json').pipe(
      map((res) => {
        const user = JSON.parse(JSON.stringify(res))
        if (user.email === _user.email && user.password === _user.password) {
          const newUser = new User(user.email, "token", "1", new Date())
          return { status: 200, message: 'Bienvenido!', response: newUser }
        }
        return { status: 200, message: 'El correo/contraseña no es válido' }
      })
    );
  }

  getUserFromLocalStorage() {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const user = new User(
        userData.email,
        userData.token,
        userData.localId,
        userData.expirationDate
      );
      return user;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('userData');
  }
}
