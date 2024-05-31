import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterModule,FormsModule],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {
  constructor(private api:ApiService,private router:Router){}
  place_order(form:any)
  { 
    console.log(form.value);
    form.value.token=localStorage.getItem("token"); 
    this.api.place_order(form.value).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(["/order_bill/"+res.order_id])
    }) 
  }

}
