import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FullComponent} from "./layout/full/full.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InventorySalesComponent} from "./pages/inventory-sales/inventory-sales.component";
import {InventoryTotalComponent} from "./pages/inventory-total/inventory-total.component";
import { InventoryReversalsComponent } from './pages/inventory-reversals/inventory-reversals.component';
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
        InventorySalesComponent,
        InventoryTotalComponent,
        InventoryReversalsComponent,
        HomeComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
