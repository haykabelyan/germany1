import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  isOpened = false;
  currentUser = '';
  navIconsActivated = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.currentUser = 'Username';
  }

  logout(event: Event) {
    event.preventDefault()
    this.authService.logout()
    this.router.navigate(['/login']);
  }

  hamburgerToggle(){
    this.isOpened = !this.isOpened;
    this.navIconsActivated = !this.navIconsActivated;
  }

}
