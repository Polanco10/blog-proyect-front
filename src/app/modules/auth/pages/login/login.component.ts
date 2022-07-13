import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IUser } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';

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


  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    this.submitted = true;
    const user: IUser = {
      email: this.form.value.email!,
      password: this.form.value.password!
    }
    if (this.form.valid) {
      console.log(this.form)

      this.authService.login(user).subscribe(res => {
        this.message = res.message
      })
    }
  }
  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')

  }
}
