import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http':
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteorosService {

  private apiUrl = 'http://localhost:3001/meteoros';

  constructor(private http: HttpClient)

  getMeteors(startDate: string, endDate: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('start_date', startDate);
    params = params.append('end_date', endDate);

    return this.http.get<any>(this.apiUrl, {params})
  }

}
