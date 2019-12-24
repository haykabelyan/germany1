import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {TokenInterceptor} from "./shared/classes/token.interceptor";
import {
  NzSelectModule,
  NzFormModule,
  NzButtonModule,
  NzInputModule
} from 'ng-zorro-antd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {OverviewPageComponent} from "./overview-page/overview-page.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    OverviewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    NzSelectModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
