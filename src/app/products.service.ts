import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _api: ApiService) { }

  list() {
    return this._api.get('/product/best-sellers?limit=3');
  }

  category() {
    return this._api.get('/category/best-sellers?limit=3');
  }

  missing() {
    return this._api.get('/product/missing?limit=3');
  }
}
