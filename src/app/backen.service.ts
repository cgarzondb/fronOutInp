import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackenService {

  constructor( private _http: HttpClient) {}

  public peticion(){
    return this._http.get('http://localhost:3000/get');
    // subscribe((respuesta) => {
    //   this.aux = respuesta;
    //   // console.log(respuesta);
    // });    
  }
}
