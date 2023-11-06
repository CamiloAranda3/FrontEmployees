import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get(`${this.url}/employees`);
  }

  getEmployeesById(id: any){
    return this.http.get(`${this.url}/employee/${id}`);

  }

}
