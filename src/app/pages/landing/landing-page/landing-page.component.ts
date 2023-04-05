import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(public auth: AuthService) {}

  login() {
    this.auth.loginWithRedirect();
  }
  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      console.log(isAuthenticated);
      if (isAuthenticated) {
        this.auth.getAccessTokenSilently().subscribe((token) => {
          console.log(token);
        });
      }
    });
  }
}
