import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabMenuComponent} from "../../components/tab-menu/tab-menu.component";
import {FullComponent} from "../../layout/full/full.component";
import {SalesTableComponent} from "../../components/inventory-sales/sales-table/sales-table.component";

@Component({
  selector: 'app-inventory-sales',
  standalone: true,
  imports: [CommonModule, TabMenuComponent, FullComponent, SalesTableComponent],
  templateUrl: './inventory-sales.component.html',
  styleUrls: ['./inventory-sales.component.scss']
})
export class InventorySalesComponent {

}
