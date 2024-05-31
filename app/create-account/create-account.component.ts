import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [NavbarComponent,FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  constructor(private api:ApiService,private route:Router){}
  createAccount(form:any)
  {

    console.log(form.value);
    this.api.createAccount(form.value).subscribe((res:any)=>{
      console.log(res);
      if(res.status = "success")
        {
          alert("Account created");
          this.route.navigate(["/login"]);
        }
        else{
          alert("Enable To Create Account")
        }
    })
  }

}
