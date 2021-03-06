import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueTableComponent } from './league-table/league-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent, LeagueTableComponent]
})
export class AppModule { }
