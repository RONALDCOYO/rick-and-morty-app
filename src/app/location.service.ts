// location.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'https://rickandmortyapi.com/api/location';
  http: any;

  constructor() { }

  getLocations(httpClient: HttpClient): Observable<any>  {
    return this.http.get(this.apiUrl);
  }
}
