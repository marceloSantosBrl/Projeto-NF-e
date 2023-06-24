import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from "primeng/table";
import {IInventorySaleRow} from "../../../../models/i-inventory-sale-row";

@Component({
  selector: 'app-sales-table',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.scss']
})
export class SalesTableComponent {

  @Input('data') public data: IInventorySaleRow[] = [
    {product: 'Camisas', brand: 'Lacoste', unit: 'Unidade', unitValue: 60,
      unitiesSold: 3, totalValue: 180, responsible: 'Wellington', transactionCode: 3030,
      transactionDate: new Date(2012, 10, 15), nfeCode: 4040},
    {product: 'Camisa', brand: 'Lacoste', unit: 'Unidade', unitValue: 60,
      unitiesSold: 3, totalValue: 180, responsible: 'Wellington', transactionCode: 3030,
      transactionDate: new Date(2012, 10, 15), nfeCode: 4040},
    {product: 'Camisa', brand: 'Lacoste', unit: 'Unidade', unitValue: 60,
      unitiesSold: 3, totalValue: 180, responsible: 'Wellington', transactionCode: 3030,
      transactionDate: new Date(2012, 10, 15), nfeCode: 4040},
    {product: 'Camisa', brand: 'Lacoste', unit: 'Unidade', unitValue: 60,
      unitiesSold: 3, totalValue: 180, responsible: 'Wellington', transactionCode: 3030,
      transactionDate: new Date(2012, 10, 15), nfeCode: 4040},
    {product: 'Camisa', brand: 'Lacoste', unit: 'Unidade', unitValue: 60,
      unitiesSold: 3, totalValue: 180, responsible: 'Wellington', transactionCode: 3030,
      transactionDate: new Date(2012, 10, 15), nfeCode: 4040}
  ]

  // product: string;
  // brand: string;
  // unity: 'kilogram' | 'litter' | 'unity' | 'linear meter' | 'square meter'
  //   | 'cubic meter' | 'pair' | 'kilowatt hour';
  // unityValue: number;
  // totalValue: number;
  // responsible: string;
  // transactionCode: number;
  // transactionDate: number;
  // nfeCode: number;
}
