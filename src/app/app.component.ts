import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Match results';
  private AngileskaLiga = new League('Liga Angielska', 2);
}
class League {
  private name: string;
  private competition_id: number;

  constructor(name: string, competition_id: number) {
    this.name = name;
    this.competition_id = competition_id;
  }
}
