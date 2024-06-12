import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../episode.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-episode-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  episodes: any[] | undefined;
  episodeService: any;


  constructor(private httpClient: HttpClient, episodeServices: EpisodeService) {}

  ngOnInit(): void {
    this.episodeService.getEpisodes(this.httpClient).subscribe((data: { results: any[] | undefined; }) => {
      this.episodes = data.results;
    });
  }
}



