import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabMenuModule} from "primeng/tabmenu";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [CommonModule, TabMenuModule],
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent {

  @Input('items') public items: MenuItem[] = [
    {label: 'Total', icon: 'pi pi-fw pi-table'},
    {label: 'Vendas', icon: 'pi pi-fw pi-shopping-cart'},
    {label: 'Estornos', icon: 'pi pi-fw pi-times-circle'},
  ]

}
