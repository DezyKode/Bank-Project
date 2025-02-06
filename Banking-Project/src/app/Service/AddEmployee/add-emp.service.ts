import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AddEmpService {
  constructor(private http: HttpClient) { }

  postEmployee(formData: FormData): Observable<any> {
    return this.http.post(`${BASIC_URL}/addemployee/post`, formData);
  }

  getEmployees(): Observable<any> {
    return this.http.get(`${BASIC_URL}/addemployee/get`); 
  }

  getEmployeeById(id: string) {
    return this.http.get<any>(`${BASIC_URL}/addemployee/get/${id}`);
  }

  updateEmpPassword(id: number, employee:any): Observable<any>{
    return this.http.put(`${BASIC_URL}/addemployee/updatepass/${id}`,employee);
  }

  updateEmpStatus(id: number, employee:any): Observable<any>{
    return this.http.put(`${BASIC_URL}/addemployee/updatestatus/${id}`,employee);
  }
}