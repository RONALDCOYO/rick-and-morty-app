// episode.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  [x: string]: any;
  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  constructor() { }

  getEpisodes(httpClient: HttpClient): Observable<any>  {
    return  httpClient.get<any>(this.apiUrl);
  }
}
