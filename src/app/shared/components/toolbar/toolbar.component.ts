import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(public auth: AuthService) {}
  login() {
    this.auth.loginWithRedirect();
  }
  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }
}
