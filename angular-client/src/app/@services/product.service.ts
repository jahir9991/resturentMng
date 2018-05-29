import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../@models/Product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllByHttp(): Observable<any> {
    return this.http.get('http://localhost:3000/api/v1/products');
  }

  insert(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/v1/products', data);
  }

  getById(id: number): any {
    return this.http.get(`http://localhost:3000/api/v1/products/${id}`);
  }
  update(id: any, data: any): any {
    return this.http.put(`http://localhost:3000/api/v1/products/${id}`, data);
  }
}
