import { Component, OnInit } from '@angular/core';
import { Race, Season } from './shared/interfaces';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ergast';
  seasons: Season[] = [];
   races: Race[] = []
  panelSeason = '';
  constructor(readonly api: ApiService) {}

  ngOnInit() {
    this.api.getSeasons().subscribe((res: any) => {
      this.seasons = res?.MRData?.SeasonTable?.Seasons
    }, err => {
      console.log(err)
    })

  }

  getRaces(_season: string) {
    this.api.getRaces(_season).subscribe((res: any) => {
      console.log('getRaces', res);
      this.races = res?.MRData?.RaceTable?.Races
    }, err => {
      console.log(err)
    })
  }
}
