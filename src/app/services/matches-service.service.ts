import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs";
import {Match} from "../app.component";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class MatchesServiceService {

  private matchesObs = new BehaviorSubject<Array<Match>>([]);
  matchesArray$ = this.matchesObs.asObservable();

  constructor(private http: HttpClient) {
    this.getMatches();
  }

  getMatches() {
    return this.http.get<Array<Match>>('http://localhost:8080/matches').subscribe(
      matches=>{
      this.matchesObs.next(matches);
        console.log(matches);
    },
      err=>{
        console.log(err);
      });
  }


}
