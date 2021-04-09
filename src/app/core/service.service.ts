import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  play:boolean=true;

  getHome() {
    return this.http.get('https://coda-twitter-replica-backend.herokuapp.com/home?count=20');

  }
  getTrends() {
    return this.http.get('https://coda-twitter-replica-backend.herokuapp.com/trends');
  }
}
