import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto, ResponseProducto } from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http:HttpClient
  ) { }

  GetAll():Observable<ResponseProducto>{
    return this.http.get<ResponseProducto>("https://api.mercadolibre.com/sites/MLA/search?q=ps5")
  }

  GetById(id:string):Observable<Producto>{
    return this.http.get<Producto>("https://api.mercadolibre.com/items/"+id)
  }

}
