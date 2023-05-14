import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {HomeCardComponent} from "../../components/home/home-card/home-card.component";
import { HomeTableComponent } from "../../components/home/home-table/home-table.component";

@Component({
    selector: 'app-full',
    standalone: true,
    templateUrl: './full.component.html',
    styleUrls: ['./full.component.scss'],
    imports: [CommonModule, MenubarModule, HomeCardComponent, HomeTableComponent]
})
export class FullComponent {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Estoques',
        icon: 'pi pi-fw pi-truck',
      },
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users'
      },
      {
        label: 'Notas',
        icon: 'pi pi-file',
      },
      {
        label: 'Vendas',
        icon: 'pi pi-fw pi-shopping-cart'
      },
      {
        label: 'Configuração',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Remove',
            icon: 'pi pi-fw pi-calendar-minus'
          }
        ]
      }
    ];
  }
}
