import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: any[] | undefined;
  characterService: any;

  constructor(private httpClient: HttpClient, private characterServices: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters(this.httpClient).subscribe((data: { results: any[] | undefined; }) => {
      this.characters = data.results;
    });
  }
}
