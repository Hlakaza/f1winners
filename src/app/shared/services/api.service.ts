import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  env = environment;
  constructor(readonly http: HttpClient) { }


  getSeasons(): Observable<object> {
    return this.http.get(`${this.env.apiUrl}/f1/seasons.json?offset=55`);
  }

  getRaces(year: string): Observable<object> {
    return this.http.get(`${this.env.apiUrl}/f1/${year}/results.json?limit=1000`);
  }
}
