import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'Basic bWFya2V0bWFrZXJzOlR0bjBFOVEw'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private endpoint: String = 'http://192.168.25.44:8080';
  private endpoint: String = 'https://api.marketmakersapp.club';

  constructor(private http: HttpClient) {
  }

  post(path, data: any) : Observable<Object> {
    return this.http.post(this.endpoint + path, data, httpOptions);
  }

  get(path) : Observable<Object> {
    return this.http.get(this.endpoint + path, httpOptions);
  }
}
