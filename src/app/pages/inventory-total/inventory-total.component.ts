import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabMenuComponent} from "../../components/tab-menu/tab-menu.component";
import {TotalTableComponent} from "../../components/total-table/total-table.component";
import {FullComponent} from "../../layout/full/full.component";

@Component({
  selector: 'app-inventory-total',
  standalone: true,
  imports: [CommonModule, TabMenuComponent, TotalTableComponent, FullComponent],
  templateUrl: './inventory-total.component.html',
  styleUrls: ['./inventory-total.component.scss']
})
export class InventoryTotalComponent {

}
