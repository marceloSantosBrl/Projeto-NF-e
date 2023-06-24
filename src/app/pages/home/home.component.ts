import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullComponent} from "../../layout/full/full.component";
import {HomeTableComponent} from "./components/home-table/home-table.component";
import {HomeCardComponent} from "./components/home-card/home-card.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FullComponent, HomeTableComponent, HomeCardComponent, ButtonModule, RippleModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private _router: Router) {}

  public handleProdutoClick(){
    this._router.navigate(['/cadastro-produto']);
  }

  public handleVendaClick() {
    this._router.navigate(['/cadastro-venda']);
  }

}
