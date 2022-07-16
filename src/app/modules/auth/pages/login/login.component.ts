import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { IAuth } from '../../models/auth.interface';
import { AuthService } from '../../services/auth.service';
import { loginStart } from '../../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  message = '';
  form = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)

  });


  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  submit() {
    this.submitted = true;
    const auth: IAuth = {
      email: this.form.value.email!,
      password: this.form.value.password!
    }
    if (this.form.valid) {
      console.log(auth)
      this.store.dispatch(loginStart({ auth }));

      // this.authService.login(user).subscribe(res => {
      //   this.message = res.message
      // })
    }
  }
  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')

  }
}
