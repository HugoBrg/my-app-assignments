import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private url = "http://localhost:3000/login";

  constructor(
    private http: HttpClient) {
  }

  getLogin(params: HttpParams){
    return(this.http.get(this.url, {params, responseType: 'json'}).toPromise());
  }

}
