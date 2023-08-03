import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto!:Producto
  isLoading:boolean=true
  constructor(
    private activateroute:ActivatedRoute,
    private productsservice:ProductosService
  ) { 
    const id = this.activateroute.snapshot.paramMap.get("id")
    if (id) {
      this.productsservice.GetById(id)
      .subscribe((data:Producto)=>{
        this.producto=data
        this.isLoading=false
      })

    }
    
  }



  ngOnInit(): void {
  }

}
