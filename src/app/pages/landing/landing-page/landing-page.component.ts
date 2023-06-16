import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { ShortlinkService } from 'src/app/services/shortlink.service';
import { IAppState } from 'src/app/state/app.state';
import { ShortLinkActions } from 'src/app/state/shortlinkdetails/shortlinkdetails.actions';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  public urlForm: FormGroup;

  constructor(public auth: AuthService, private store: Store<IAppState>) {
    this.urlForm = new FormGroup({
      url: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?<Protocol>(http|https)+):\\/\\/(?<Domain>[\\w@][\\w.:@]+)\\/?[\\w\\.?=%&=\\-@/$,]*'
        ),
      ]),
    });
  }

  textboxEnterPressed() {
    console.log(this.urlForm.controls['url'].value);
    this.store.dispatch(
      ShortLinkActions.add({ endpointUrl: this.urlForm.controls['url'].value })
    );
  }
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
