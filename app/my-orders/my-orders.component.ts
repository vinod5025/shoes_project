import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterModule],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent 
{
  orders:any;
  constructor(private api:ApiService){
    var req={
      "token":localStorage.getItem("token")}
    this.api.order_list(req).subscribe((res:any)=>{
      this.orders= res.order_det;
      console.log(res);

    })

  }

}
