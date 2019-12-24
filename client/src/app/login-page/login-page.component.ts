import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from "@angular/router";
import {AuthService} from "../shared/services/auth.service";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  validateForm: FormGroup;
  aSub: Subscription;

  constructor(private fb: FormBuilder, private authService: AuthService,   private router: Router,  private notification: NzNotificationService ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    this.validateForm.disable()
    this.aSub = this.authService.login(this.validateForm.value).subscribe(
      () => this.router.navigate(['/overview']),
      error => {
        this.notification.blank('Get Current User', error.error.error);
        this.validateForm.enable()
      }
    )
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

}
