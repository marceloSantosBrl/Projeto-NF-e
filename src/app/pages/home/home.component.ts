import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullComponent} from "../../layout/full/full.component";
import {HomeTableComponent} from "../../components/home/home-table/home-table.component";
import {HomeCardComponent} from "../../components/home/home-card/home-card.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FullComponent, HomeTableComponent, HomeCardComponent, ButtonModule, RippleModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
