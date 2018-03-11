import { Injectable, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IProduct } from './product';

@Injectable()
export class ProductService {
  constructor(private _http: HttpClient) { }

  private _productUrl = '../assets/products/products.json';
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  getProduct(id: number): Observable<IProduct> {
    return this.getProducts()
      .map((products: IProduct[]) => products.find(p => p.productId === id));
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
