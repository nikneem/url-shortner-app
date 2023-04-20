import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { ShortlinkService } from 'src/app/services/shortlink.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  public urlForm: FormGroup

  constructor(public auth: AuthService, private ssService: ShortlinkService) {
    this.urlForm = new FormGroup({
      url: new FormControl('', [Validators.required, Validators.pattern('(?<Protocol>(http|https)+):\\/\\/(?<Domain>[\\w@][\\w.:@]+)\\/?[\\w\\.?=%&=\\-@/$,]*')])
    })
  }

  textboxEnterPressed(){
    console.log(this.urlForm.controls['url'].value);
    this.ssService.createShortlink(this.urlForm.controls['url'].value).subscribe(res =>{console.log(res);})
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
