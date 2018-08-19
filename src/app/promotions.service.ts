import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  constructor(private _api: ApiService) { }

  create(data) : Observable<Object> {
    return this._api.post('/promotion', data);
  }
}
