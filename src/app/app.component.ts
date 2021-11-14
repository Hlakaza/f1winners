import { Component, OnInit } from '@angular/core';
import { Race, Season } from './shared/interfaces';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'F1 World Champions';
  seasons: Season[] = [];
  races: Race[] = []
  panelSeason = '';
  loadingResults: any = [];
  loading = true;
  constructor(readonly api: ApiService) {}

  ngOnInit() {
    this.api.getSeasons().subscribe((res: any) => {
      this.seasons = res?.MRData?.SeasonTable?.Seasons;
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    })

  }
  /**
   * 
   * @param _season string: Any selected year
   * Get all races for the selected year
   * @param loadingResults: Used to show the loader on the selected block
   */
  getRaces(_season: string) {
    this.loadingResults[_season] = true;
    this.races = [];
    this.api.getRaces(_season).subscribe((res: any) => {
      this.races = res?.MRData?.RaceTable?.Races
      this.loadingResults[_season] = false;
    }, err => {
      console.log(err);
      this.loadingResults[_season] = false;
    })
  }
}
