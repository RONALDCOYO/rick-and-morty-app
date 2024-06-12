import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-location-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  locations: any[] | undefined;
  locationServive: any;
  locationService: any;

  constructor(private httpClient: HttpClient, locationServices: LocationService ) { }

  ngOnInit(): void {
    this.locationService.getLocations(this.httpClient).subscribe((data: any) => {
      this.locations = data.results;
    });
    
  }
}