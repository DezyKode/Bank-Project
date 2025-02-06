import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class BankPayoutService {

  constructor(private http: HttpClient) { }

  postBankPayout(formData: FormData): Observable<any>{
    return this.http.post(`${BASIC_URL}/bankdetails/post`, formData);
  }

  getBankDetails(): Observable<any>{
    return this.http.get(`${BASIC_URL}/bankdetails/get`);
  }
}
