import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  islogin:boolean=false
  constructor(
    private authservice:AuthService
  ) { 
    this.authservice.islogin()
    .subscribe(value=>{
      this.islogin = value
    })
  }
  logout(){
    this.authservice.logout()
  }

  ngOnInit(): void {
  }

}
