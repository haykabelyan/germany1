import { Component, OnInit } from '@angular/core';

interface ItemData {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {

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
