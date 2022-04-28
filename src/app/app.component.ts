import {Component} from '@angular/core';
import {MatchesServiceService} from "./services/matches-service.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Match results';

  allMatches$: Observable<Array<Match>>;

  constructor(private matchesService: MatchesServiceService) {
    this.getMatches();
  }

  getMatches() {
    this.allMatches$ = this.matchesService.matchesArray$;
  }


}

export interface Match {
  id: number;
  competitionName: string;
  homeClubName: string;
  awayClubName: string;
  result: string;
  matchDate: string;
  matchTime: string;
  state: string;
}
