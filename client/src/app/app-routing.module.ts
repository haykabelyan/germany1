import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {OverviewPageComponent} from "./overview-page/overview-page.component";
import {AuthGuard} from "./shared/classes/auth.guard";
import {CreateProjectPageComponent} from "./create-project-page/create-project-page.component";
import {LifeCallPageComponent} from "./life-call-page/life-call-page.component";
import {MemberPageComponent} from "./member-page/member-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {CallPageComponent} from "./call-page/call-page.component";
import {HistoryPageComponent} from "./history-page/history-page.component";
import {CreateNumberListPageComponent} from "./create-number-list-page/create-number-list-page.component";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent}
  ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
    {path: 'overview', component: OverviewPageComponent},
    {path: 'create-number-list', component: CreateNumberListPageComponent},
    {path: 'create-project', component: CreateProjectPageComponent},
    {path: 'call', component: CallPageComponent},
    {path: 'history', component: HistoryPageComponent},
    {path: 'create', component: CreateProjectPageComponent},
    {path: 'life-calls', component: LifeCallPageComponent},
    {path: 'members', component: MemberPageComponent},
    {path: 'profile', component: ProfilePageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
