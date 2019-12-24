import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-number-list-page',
  templateUrl: './create-number-list-page.component.html',
  styleUrls: ['./create-number-list-page.component.scss']
})
export class CreateNumberListPageComponent implements OnInit {

  fileList = [];

  constructor() { }

  ngOnInit() {
  }


}
