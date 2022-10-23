import { filter } from 'rxjs';
import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public productList :any;
public filterCategory:any;
searchKey : string ="";
  constructor(private api:ApiService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList =res;
      this.filterCategory =res;
      this.productList.forEach((a:any)=>{
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion";
        }
Object.assign(a,{quantity:1,total:a.price});
      });
    });
    this.cartservice.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item:any){
    this.cartservice.addtoCart(item);

  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category == '' ){
        return a;

      }
    })

  }

}
