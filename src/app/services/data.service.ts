import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPharmaData(): Observable<Array<any>> {
    const url =
      'https://storage.googleapis.com/gweb-dat-coding-challenge-data-sources/pharmaceutical_drug_spending_by_counties.json';
    return this.http.get<any[]>(url);
  }
}
