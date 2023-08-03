import { Component, OnInit } from '@angular/core';
import { Producto, ResponseProducto } from 'src/app/interfaces/productos';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title="Bienvenido a Home"
isLoading:boolean=true
productos:Producto[]=[]
  constructor( private productosService:ProductosService) 
  { 
    this.productosService.GetAll()
    .subscribe({
      next:(data:ResponseProducto)=>{
        this.productos = data.results
        this.isLoading=false
      },
      error:error=>{
        console.log(error)
      }
  })
  }

  ngOnInit(): void {
  }

}
