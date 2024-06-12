import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor() { }

  getCharacters(httpClient: HttpClient): Observable<any> {
    return httpClient.get<any>(this.apiUrl);
  }
}
