import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {TokenInterceptor} from "./shared/classes/token.interceptor";
import {
  NzSelectModule,
  NzFormModule,
  NzButtonModule,
  NzInputModule,
  NzMenuModule,
 NzUploadModule,
  NzTableModule,
  NzDropDownModule,
  NzTagModule,
 NzNotificationModule,
 NzIconModule
} from 'ng-zorro-antd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {OverviewPageComponent} from "./overview-page/overview-page.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LifeCallPageComponent } from './life-call-page/life-call-page.component';
import { MemberPageComponent } from './member-page/member-page.component';
import { CallPageComponent } from './call-page/call-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { CreateNumberListPageComponent } from './create-number-list-page/create-number-list-page.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    OverviewPageComponent,
    CreateProjectPageComponent,
    ProfilePageComponent,
    LifeCallPageComponent,
    MemberPageComponent,
    CallPageComponent,
    HistoryPageComponent,
    CreateNumberListPageComponent
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
    NzInputModule,
    NzMenuModule,
    NzUploadModule,
    NzTableModule,
    NzDropDownModule,
    NzTagModule,
    NzNotificationModule,
    NzIconModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor
  },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
