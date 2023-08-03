import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:FormGroup
  
  constructor(private variable:FormBuilder,private authService:AuthService) { 
    this.myForm = this.variable.group({
      email:["",[Validators.required]],
      contraseña:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]]
    })
  }

  loguear(){
    this.authService.login()
    console.log(this.myForm.value)
    

  }

  ngOnInit(): void {
  }

}
