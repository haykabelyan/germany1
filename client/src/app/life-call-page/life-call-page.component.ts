import { Component, OnInit } from '@angular/core';

interface ItemData {
  name: string;
  age: number;
  address: string;
}


@Component({
  selector: 'app-life-call-page',
  templateUrl: './life-call-page.component.html',
  styleUrls: ['./life-call-page.component.scss']
})
export class LifeCallPageComponent implements OnInit {

  listOfData: ItemData[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London`
      });
    }
  }

}
