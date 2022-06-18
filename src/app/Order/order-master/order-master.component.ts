import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit {
  catList:ICategory[];
  selectedCatID:number = 0;
  orderTotalPrice:number = 0;
  constructor() {
    this.catList = [
      {id:1, name:'chairs'},
      {id:2, name:'couch'},
      {id:3, name:'drawer'},
    ]
   }
  

  ngOnInit(): void {
  }

}
