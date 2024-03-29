import { NgModule, LOCALE_ID } from '@angular/core';

import { SharedModule } from "../shared/shared.module";

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { LoginModalComponent } from "./auth/modals/login-modal/login-modal.component";
import { SignupModalComponent } from "./auth/modals/signup-modal/signup-modal.component";

import { LoginComponent } from "./auth/pages/login/login.component";
import { SignupComponent } from "./auth/pages/signup/signup.component";
import { NetworkInterceptor } from "./interceptors/network.interceptor";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { TokenService } from "./services/token.service";
import { AuthGuard } from "./guards/auth.guard";

@NgModule({
  declarations: [
    LoginModalComponent,
    SignupModalComponent,
    LoginComponent,
    SignupComponent
  ]
  ,
  imports: [
    SharedModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ro' },
    {provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    TokenService,
    AuthGuard
  ],
})
export class CoreModule {

  constructor() { }
}
