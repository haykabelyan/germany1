import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from "../shared/services/profile.service";
import {AuthService} from "../shared/services/auth.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {User} from "../shared/interfaces";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  validateForm: FormGroup;
  authTokenVisible = false;
  currentUser: User;


  constructor(private fb: FormBuilder,  private notification: NzNotificationService, private authService: AuthService, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      twilioAuthToken: [ null, [Validators.required]],
      twilioAccountSid: [null, [Validators.required]]
  });

    this.authService.getCurrentUser().subscribe(data=>{
      this.currentUser = data['_doc'];
      this.validateForm.reset({
        firstName: this.currentUser.firstName,
        lastName: this.currentUser.lastName,
        twilioAuthToken: this.currentUser.twilioAuthToken,
        twilioAccountSid: this.currentUser.twilioAccountSid
      });
    }, error=>{this.notification.blank('Get Current User', error.error.error);});
  }


  submitForm(): void {
    this.validateForm.disable();
    this.profileService.setProfileConfig(this.validateForm.value).subscribe(data=>{
     this.validateForm.enable();
   });
  }


  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };



}
