import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import {MatchesServiceService} from "./services/matches-service.service";
import {HttpClientModule} from "@angular/common/http";
import { SortByDatePipe } from './pipe/sort-by-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeagueTableComponent,
    SortByDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [MatchesServiceService],
  bootstrap: [AppComponent, LeagueTableComponent]
})
export class AppModule { }
