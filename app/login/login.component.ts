import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent,RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private api:ApiService,private route:Router){}
  login(form:any)
  {
    console.log(form.value);
    this.api.loginAccount(form.value).subscribe((res:any)=>{
      console.log(res);
      if(res.status == "success")

        {
          localStorage.setItem("token",res.token);
          alert("Login Success");
          this.route.navigate(["/"])
        }
        else
        {
          alert("Login Failed");
        }
    });
  }
}

