import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Observable } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  private readonly URL = 'https://api.exchangerate-api.com/v4/latest/USD';
  constructor(private http:HttpClient) { }

  getRates(): Observable<any>{
 
    return this.http.get(this.URL);

  }

}
