import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {

  prdList:IProduct[];
  @Input() sentCatID:number=0;
  orderTotalPrice:number = 0;
  cartItems:IProduct[] =[];
  prdListOfCat:IProduct[] = [];

  constructor() { 
    
    this.prdList = [{id:100, name:"Cozy relaxing chair", price:5000, quantity:1, imgURL:"https://picsum.photos/150/150", categoryID:1},

    {id:200, name:"Multicolored couch", price:5000, quantity:5, imgURL:"https://picsum.photos/150/150", categoryID:2},

    {id:300, name:"Drawer", price:5000, quantity:1, imgURL:"https://picsum.photos/150/150", categoryID:3},

    {id:400, name:"Bedroom", price:10000, quantity:1, imgURL:"https://picsum.photos/150/150", categoryID:4},

    {id:500, name:"Organizing box", price:100, quantity:1, imgURL:"https://picsum.photos/150/150", categoryID:5},

    
    {id:600, name:"Kitchens", price:10000, quantity:1, imgURL:"https://picsum.photos/150/150", categoryID:6},
  ];

  this.prdListOfCat = this.prdList;
  }

  ngOnChanges(): void {
   this.filterProductsByCatID();
  }

  ngOnInit(): void {
  }

  prdTrackByFn(index:number, prd:IProduct):number {
    return prd.id; //identify el7aga el bt loop 3leiha bl id bta3o
  }


  buy(prdPrice:number, count:string)
  {
    // casting 
      //Implicit casting
    // let itemsCount:number = count;
    // let itemsCount:number;
    //   //Explicit casting

    // this.orderTotalPrice = parseInt(count)*prdPrice;
    // this.orderTotalPrice = Number(count) *prdPrice;
    // // itemsCount = count as number;
    this.orderTotalPrice = +count * prdPrice
  }

  private filterProductsByCatID() 
  {
    if(this.sentCatID == 0)
    {
      this.prdListOfCat = this.prdList
    }
    else
    {
      this.prdListOfCat = this.prdList.filter(prd=>prd.categoryID == this.sentCatID);
    }

  }

  addToCart(prdId: number, prdName:string, prdPrice:number, prdQuantity:number, prdImg:string, prdCategoryID:number){
    
    this.cartItems.push({
     id:prdId,
     name : prdName,
     price: prdPrice,
     quantity:prdQuantity,
     imgURL:prdImg,
     categoryID:prdCategoryID
    })
  }

  viewCart()
  {
    return this.cartItems.length
  }


}
