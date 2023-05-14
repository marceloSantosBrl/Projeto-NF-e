import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullComponent} from "../../layout/full/full.component";
import {HomeTableComponent} from "../../components/home/home-table/home-table.component";
import {HomeCardComponent} from "../../components/home/home-card/home-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FullComponent, HomeTableComponent, HomeCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
