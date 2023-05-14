import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FullComponent} from "./layout/full/full.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeCardComponent} from "./components/home/home-card/home-card.component";
import {HomeTableComponent} from "./components/home/home-table/home-table.component";
import {HomeComponent} from "./pages/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullComponent,
    BrowserAnimationsModule,
    HomeCardComponent,
    HomeTableComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
