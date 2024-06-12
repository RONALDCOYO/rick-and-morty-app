import { Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { LocationListComponent } from './location-list/location-list.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';

export const routes: Routes = [
{
    path: '',
    component: CharacterListComponent
},

{
    path: 'location',
    component: LocationListComponent
},
{
    path: 'episode',
    component: EpisodeListComponent
},
]
