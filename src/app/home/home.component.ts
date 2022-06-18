import { Component, OnInit } from '@angular/core';
import { StoreData } from '../ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  storeInfo: StoreData;
  isImageShown:boolean=false;

  constructor() {
    this.storeInfo = new StoreData('Cozy Home', "./assets/logo.jpg", ["cairo", "alex", "sharqeya"])
   }

   toggleImage() {
     this.isImageShown = !this.isImageShown;
   }

}
