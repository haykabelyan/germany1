import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from "@angular/router";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit, OnDestroy {

  validateForm: FormGroup;
  aSub: Subscription;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    this.validateForm.disable()
    this.aSub = this.authService.register(this.validateForm.value).subscribe(
      () => {
        this.router.navigate(['/login'], {
          queryParams: {
            registered: true
          }
        })
      },
      error => {
        console.warn(error.error.message)
        this.validateForm.enable()
      }
    )
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

}
