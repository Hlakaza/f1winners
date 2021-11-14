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

  /**
   * 
   * @returns an observale with a list of Seasons (years) from 2005 to current year
   */
  getSeasons(): Observable<object> {
    return this.http.get(`${this.env.apiUrl}/f1/seasons.json?offset=55`);
  }

  /**
   * 
   * @param year string
   * @returns an observalbe with a list of Races
   */
  getRaces(year: string): Observable<object> {
    return this.http.get(`${this.env.apiUrl}/f1/${year}/results.json?limit=600`);
  }
}
