import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterModule],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent {
   prouduct_info:any;
  constructor(private activeroute:ActivatedRoute, private api:ApiService)
  {
    this.activeroute.params.subscribe((urldata:any)=>{
      var product_id=urldata.product_id;
      var req={
        "product_id":product_id,
        "token":localStorage.getItem('token')
      };

      this.api.getProductDetailsById(req).subscribe(res=>{
        console.log(res);
        this.prouduct_info=res;
      })
    })
  }
  addToCart()
  {
    var data= {
      "product_id":this.prouduct_info.product_tbl_id,
      "token":localStorage.getItem("token")
    };
    this.api.addProductInCart(data).subscribe(res=>{
      this.prouduct_info.cart="Yes",
      this.prouduct_info.qty=1
      console.log(res);
    })
  }

}
