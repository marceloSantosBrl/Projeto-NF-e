import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent {
  @Input('imgModel') public imgModel = {
    path: 'assets/sales.svg',
    alt: 'icone de vendas'
  };
  @Input('title') public title = 'Notas fiscais';
  @Input('change') public change = 0.04;
  @Input('value') public value = 75;
  @Input('type') public type = 'number';
}
