import { Component } from '@angular/core';
import { Creds, AuthService } from '../state/auth.service';

@Component({
  selector: 'app-login-page',
  template: `
    <app-login-form
      (submitted)="onSubmit($event)">
    </app-login-form>
  `,
  styles: [],
})
export class LoginPageComponent {
  // pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
  // error$ = this.store.pipe(select(fromAuth.getLoginPageError));

  constructor(private authService: AuthService) {
  }

  onSubmit(creds: Creds) {
    this.authService.login(creds).subscribe();
  }
}
