import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 public products :any = [];
 public grandTotal !: number;
  constructor( private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartservice.getTotalPrice();
    })
  }
  removeItem(item:any){
    if(confirm('Are you sure want to delete the item from cart?'))
    this.cartservice.removeCartItem(item);
  }
  emptycart(){
    if(confirm('Are you sure want to delete all the items from cart?'))
    this.cartservice.removeAllCart();
  }

}
