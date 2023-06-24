import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { IHomeBankRow } from 'src/app/models/i-home-bank-row';
import { ButtonModule } from 'primeng/button';
import bankRows from 'src/app/mocks/home-table/bankRows';

@Component({
  selector: 'app-home-table',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss'],
})
export class HomeTableComponent {
  @Input('data') public data: IHomeBankRow[] = bankRows;
  @Input('columns') public columns: string[] = [
    'Produto',
    'Quantidade',
    'Marcas',
    'Valor',
    'NF-e',
  ];
}
