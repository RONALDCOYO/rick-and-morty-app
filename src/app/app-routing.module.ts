import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { LocationListComponent } from './location-list/location-list.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';




const routes: Routes = [
  { path: 'characters', component: CharacterListComponent },
  { path: 'locations', component: LocationListComponent },
  { path: 'episodes', component: EpisodeListComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }, EpisodeListComponent

