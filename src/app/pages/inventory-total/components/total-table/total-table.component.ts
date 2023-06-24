import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IInventoryTotalRow } from 'src/app/models/iinventory-total-row';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-total-table',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './total-table.component.html',
  styleUrls: ['./total-table.component.scss']
})
export class TotalTableComponent {

  @Input('data') public data: IInventoryTotalRow[] = [
    {product: 'Camisa', amount: 60, brand: 'Lacoste', 
    lastUpdate: new Date(1995,11,17), nfeAmount: 30},
    {product: 'Camisa', amount: 60, brand: 'Lacoste', 
    lastUpdate: new Date(1995,11,17), nfeAmount: 30},
    {product: 'Camisa', amount: 60, brand: 'Lacoste', 
    lastUpdate: new Date(1995,11,17), nfeAmount: 30},
    {product: 'Camisa', amount: 60, brand: 'Lacoste', 
    lastUpdate: new Date(1995,11,17), nfeAmount: 30},
    {product: 'Camisa', amount: 60, brand: 'Lacoste', 
    lastUpdate: new Date(1995,11,17), nfeAmount: 30},
    {product: 'Camisa', amount: 60, brand: 'Lacoste', 
    lastUpdate: new Date(1995,11,17), nfeAmount: 30},
    {product: 'Camisa', amount: 60, brand: 'Lacoste', 
    lastUpdate: new Date(1995,11,17), nfeAmount: 30},
  ]
}
