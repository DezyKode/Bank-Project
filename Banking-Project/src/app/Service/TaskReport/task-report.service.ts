import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class TaskReportService {

  private baseUrl = 'http://localhost:8080/create/update';

  constructor(private http: HttpClient) { }

  getTask(): Observable<any> {
    return this.http.get(BASIC_URL + "/create/gettask");
  }

  updateStatus(id: number, status: string, priority: string): Observable<any> {
    const body = { status, priority };
    return this.http.put<any>(`${this.baseUrl}/${id}`, body);
  }
}
