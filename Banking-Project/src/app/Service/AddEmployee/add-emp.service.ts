import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL="http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AddEmpService {

  constructor(private http:HttpClient) { }

  postEmployee(employee:any):Observable<any>
  {
    return this.http.post(BASIC_URL + "/addemployee/post",employee);
  }
}