import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { autoLogout } from 'src/app/modules/auth/store/auth.actions';
import { isAuthenticated } from 'src/app/modules/auth/store/auth.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isAuthenticated: boolean = false

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(isAuthenticated).subscribe(res =>
      this.isAuthenticated = res
    )
  }
  onLogout(event: Event) {
    event.preventDefault();
    this.store.dispatch(autoLogout());
  }

}
