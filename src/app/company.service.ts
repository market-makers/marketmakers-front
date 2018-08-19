import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private _api: ApiService;
  private company: any;

  constructor(private api: ApiService) {
    this._api = api;
  }

  create(data: any) : Observable<Object>{
    return this._api.post('/company', data);
  }

  setCompany(company: any) {
    this.company = company;
    //persist
    window.localStorage.setItem('company', JSON.stringify(company));
  }

  getCompany(): any {
    let session: any = window.localStorage.getItem('company');
    if(session) {
      session = JSON.parse(session);
    }
    return this.company || session;
  }

  login(data: any) {
    return this._api.post('/company/login', data);
  }

  logout() {
    window.localStorage.removeItem('company');
    this.company = null;
  }

}
