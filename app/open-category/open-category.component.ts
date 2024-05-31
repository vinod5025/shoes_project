import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-open-category',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterModule],
  templateUrl: './open-category.component.html',
  styleUrl: './open-category.component.css'
})
export class OpenCategoryComponent {
  products:any;
  cat_name:any;
  constructor(private activeroute:ActivatedRoute,private api:ApiService){
    this.activeroute.params.subscribe((urldata:any)=>{
      this.cat_name=urldata.cat_name;
      this.api.getProductByCat({"cat_id":urldata.cat_id}).subscribe(res=>{
        this.products=res;
        console.log(res);
      })
    })

  }

}
