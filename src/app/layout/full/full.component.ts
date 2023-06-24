import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {HomeCardComponent} from "../../pages/home/components/home-card/home-card.component";
import {HomeTableComponent} from "../../pages/home/components/home-table/home-table.component";
import { ButtonModule } from 'primeng/button';
import {MenuModule} from "primeng/menu";
@Component({
  selector: 'app-full',
  standalone: true,
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss'],
  imports: [CommonModule, MenubarModule, HomeCardComponent, HomeTableComponent,
    ButtonModule, MenuModule]
})
export class FullComponent implements OnInit{
  items!: MenuItem[];
  public configurationItems!: MenuItem[]
  ngOnInit() {
    this.configurationItems = [
      {label: 'linguagem'},
      {label: 'sair'},
      {label: 'sobre'}
    ]
    this.items = [
      {
        label: 'Estoques',
        icon: 'pi pi-fw pi-truck',
        items: [
          {label: 'Cadastrar Produto', routerLink: '/cadastro-produto'},
          {label: 'Listagem de Estoque', routerLink: '/listagem-estoque'},
        ]
      },
      {
        label: 'Pessoas',
        icon: 'pi pi-fw pi-users',
        items: [
          {label: 'Clientes', routerLink: '/listagem-cliente'},
          // {label: 'Fornecedores'},
          // {label: 'Vendedores'},
          {label: 'Cadastro Clientes', routerLink: '/cadastro-cliente'}
        ]
      },
      {
        label: 'Financeiro',
        icon: 'pi pi-file',
      },
      {
        label: 'Vendas',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [
          {label: 'Listagem de vendas', routerLink: '/listagem-venda'},
          // {label: 'Estorno de vendas'},
          {label: 'Cadastrar vendas', routerLink: '/cadastro-venda'}
        ]
      },
      {
        label: 'Relatórios',
        icon: 'pi pi-fw pi-chart-line',
        items: [
          {label: 'Dashboard', routerLink: '/home'}
        ]
      },
    ];
  }
}
