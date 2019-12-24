import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ProjectService} from "../../services/project.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  isOpened = false;
  currentUser = '';
  navIconsActivated = true;
  // owner, agent, manager
  position = 'agent';
  projects;

  constructor(
    private authService: AuthService,
    private router: Router,
    private projectService: ProjectService,
    private notification: NzNotificationService,
  private cookieService: CookieService
) { }

  ngOnInit() {

    this.authService.getCurrentUser().subscribe(data=>{
      this.currentUser = data['_doc']['username'];
    }, error=>{this.notification.blank('Get Current User', error.error.error);});

    this.projectService.getProjectsByUser().subscribe(data=>{
      this.projects = data;
    }, error=>{this.notification.blank('Get Projects', error.error.error);});

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


  onChangeProject(projectId){
    this.projectService.selectProject(projectId).subscribe(data=>{
      console.log(data);
      this.cookieService.set( 'projectCapapabilityToken', JSON.stringify(data) );
    });
  }

  createProject(){
    this.router.navigate(['/create-project']);
  }

}

