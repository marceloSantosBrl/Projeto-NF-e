import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IInventoryReversalRow } from 'src/app/models/iinventory-reversal-row';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-reversal-table',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './reversal-table.component.html',
  styleUrls: ['./reversal-table.component.scss'],
})
export class ReversalTableComponent {
  @Input('data') public data: IInventoryReversalRow[] = [
    {
      value: 60,
      saleCode: 3030,
      saleDate: new Date(2022, 10, 10),
      nfeCode: 5050,
      reversalDate: new Date(2022, 11, 10),
    },
    {
      value: 60,
      saleCode: 3030,
      saleDate: new Date(2022, 10, 10),
      nfeCode: 5050,
      reversalDate: new Date(2022, 11, 10),
    },
    {
      value: 60,
      saleCode: 3030,
      saleDate: new Date(2022, 10, 10),
      nfeCode: 5050,
      reversalDate: new Date(2022, 11, 10),
    },
    {
      value: 60,
      saleCode: 3030,
      saleDate: new Date(2022, 10, 10),
      nfeCode: 5050,
      reversalDate: new Date(2022, 11, 10),
    },
    {
      value: 60,
      saleCode: 3030,
      saleDate: new Date(2022, 10, 10),
      nfeCode: 5050,
      reversalDate: new Date(2022, 11, 10),
    },
    {
      value: 60,
      saleCode: 3030,
      saleDate: new Date(2022, 10, 10),
      nfeCode: 5050,
      reversalDate: new Date(2022, 11, 10),
    },
    {
      value: 60,
      saleCode: 3030,
      saleDate: new Date(2022, 10, 10),
      nfeCode: 5050,
      reversalDate: new Date(2022, 11, 10),
    },
  ];
}
