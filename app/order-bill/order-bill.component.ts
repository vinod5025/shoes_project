import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule, NgStyle } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-order-bill',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterModule],
  templateUrl: './order-bill.component.html',
  styleUrl: './order-bill.component.css'
})
export class OrderBillComponent {
  order_info:any;
  products:any;
  constructor(private activeroute:ActivatedRoute, private api:ApiService)
  {
    this.activeroute.params.subscribe((res:any)=>{
      const req=
      {
        "order_id":res.order_id,
        "token":localStorage.getItem("token")
      }
      this.api.getOrderInfo(req).subscribe((res2:any)=>{
        console.log(res2);
        this.order_info=res2.order_det[0];
        this.products=res2.order_products;

      })
    })
  }


}
