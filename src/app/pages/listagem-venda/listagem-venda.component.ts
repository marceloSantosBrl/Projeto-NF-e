import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FullComponent } from "../../layout/full/full.component";
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
    selector: 'app-listagem-venda',
    standalone: true,
    templateUrl: './listagem-venda.component.html',
    styleUrls: ['./listagem-venda.component.scss'],
    imports: [CommonModule, TableModule, FullComponent, ButtonModule]
})
export class ListagemVendaComponent {
  public mockData = [
    {data: new Date(), numero: 12345678, cliente: 'James smith', valor: 5000, situacao: 'pagamento 1/3'},
    {data: new Date(), numero: 1234568, cliente: 'James smith', valor: 5000, situacao: 'pagamento 1/3'},
    {data: new Date(), numero: 123478, cliente: 'James smith', valor: 5000, situacao: 'pagamento 1/3'},
    {data: new Date(), numero: 1288678, cliente: 'James smith', valor: 5000, situacao: 'pagamento 1/3'},
  ]


  constructor(private _router: Router) { }

  public handleClick(id: number) {
    console.log(id);
  }

  public handleCadastroClick() {
    this._router.navigate(['/cadastro-venda']);
  }
}
