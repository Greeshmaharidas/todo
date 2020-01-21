import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl}     from '../config/config';



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  add(name,description){
    return this.http.post(`${baseUrl}create`,{
      name,
      description
    });
  }
  edit(id,name,description){
    return this.http.put(`${baseUrl}edit/${id}`,{
      name,
      description
    });
  }
  get(){
    return this.http.get(baseUrl);
  }
  getById(id){
    return this.http.get(`${baseUrl}todo/${id}`);
  }
  delete(id){
    return this.http.delete(`${baseUrl}delete/${id}`);
  }
}
