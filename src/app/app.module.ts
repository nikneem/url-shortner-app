import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LandingModule } from './pages/landing/landing.module';
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LandingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    AuthModule.forRoot({
      domain: 'urlshortner.eu.auth0.com',
      clientId: 'hLizlNwuAKTzynkrmdrkueQOvjf9phlH',

      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://api.tinylnk.nl',
        scope: 'openid profile email read:shortlinks write:shortlinks',
      },
      httpInterceptor: {
        allowedList: [
          {
            uri: 'https://api.tinylnk.nl/api/*',
            tokenOptions: {
              authorizationParams: {
                audience: 'https://api.tinylnk.nl',
                scope: 'read:shortlinks write:shortlinks',
              },
            },
          },
          {
            uri: 'https://localhost:32770/api/*',
            tokenOptions: {
              authorizationParams: {
                audience: 'https://api.tinylnk.nl',
                scope: 'read:shortlinks write:shortlinks',
              },
            },
          },
        ],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
