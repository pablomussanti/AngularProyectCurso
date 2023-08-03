import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 myForm:FormGroup
  constructor(
    private variable:FormBuilder
  ) { 
    this.myForm = this.variable.group({
      nombre:["",[Validators.required]],
      email:["",[Validators.required]],
      telefono:[""],
      apellido:["",[Validators.required]],
      contraseña:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]]
    })
  }

  registrarse(){
    console.log(this.myForm.value)
  }

  ngOnInit(): void {
  }

}
