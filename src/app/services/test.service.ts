import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {}

  test() {
    this.http.get('http://localhost:3000/single').subscribe(res =>
    console.log(res));
  }

}
