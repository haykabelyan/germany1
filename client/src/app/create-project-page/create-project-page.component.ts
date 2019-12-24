import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../shared/services/project.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-create-project-page',
  templateUrl: './create-project-page.component.html',
  styleUrls: ['./create-project-page.component.scss']
})
export class CreateProjectPageComponent implements OnInit, OnDestroy {

  validateForm: FormGroup;
  image: File;
  imagePreview;
  oSub: Subscription;

  constructor(private fb: FormBuilder, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      ticketListId: [null, [Validators.required]],
      description: [null, [Validators.required]],
      voipProvider: [null, [Validators.required]],
      userIds:  new FormArray([
            new FormControl(),
      ]),
    });
  }

  changeVoipProvider(event) {
    console.log(event);
  }

  changeTicketListId(event){
    console.log(event);
  }


    submitForm() {
      this.oSub = this.projectService.createProject(this.validateForm.value).subscribe(data => {
          console.log(data);
          this.validateForm.reset();
        },
        error => {
          console.log(error);
      })
    }

  ngOnDestroy() {
    if (this.oSub) {
      this.oSub.unsubscribe()
    }
  }




}
