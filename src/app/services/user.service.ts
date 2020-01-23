import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  register(user)
  {
    return this.http.post(`${baseUrl}register`,user);
  }
  login(data) {
    return this.http.post(`${baseUrl}login`,data,{
      withCredentials: true
    });
  }
}
