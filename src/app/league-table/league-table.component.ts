import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})

export class LeagueTableComponent implements OnInit {
  private PolishLeague = new League('Polish League', 60);
  private GermanLeague = new League('German League', 1);
  private EnglishLeague = new League('English League', 2);
  private ItalianLeague = new League('Italian League', 4);
  private FrenchLeague = new League('French League', 5);
  private SpanishLeague = new League('Spanish League', 3);

  public listLeague = [this.PolishLeague, this.EnglishLeague, this.SpanishLeague, this.ItalianLeague, this.GermanLeague, this.FrenchLeague]


  ngOnInit(): void {
  }

}



class League {
  private name: string;
  private competition_id: number;

  constructor(name: string, competition_id: number) {
    this.name = name;
    this.competition_id = competition_id;
  }

  public getName(): string {
    return this.name;
  }
}
