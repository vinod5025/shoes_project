import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cat_list:any;
  allready_login:any;
  constructor(private api:ApiService,private route:Router)
  {
    if(localStorage.getItem("token"))
    {
    this.allready_login = true;
    }
  else
  {
    this.allready_login = false
  } 

    this.api.getAllCategory().subscribe(res=>{
      this.cat_list=res;
      console.log(this.cat_list);
    })
  }
  logout()
  {
    localStorage.removeItem("token");
    // this.route.navigate(["/"])
    location.reload()
  }
}
