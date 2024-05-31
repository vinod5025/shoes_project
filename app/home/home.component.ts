import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides:any;
  products:any;
  constructor(private api:ApiService){
    this.api.getSlider().subscribe(res=>{
      this.slides=res;
    })
    this.api.getAllProducts().subscribe(res=>{
      this.products=res;
    })
  }


}
