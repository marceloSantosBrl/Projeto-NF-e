import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FullComponent } from 'src/app/layout/full/full.component';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-estoque',
  standalone: true,
  imports: [CommonModule, TableModule, FullComponent, ButtonModule],
  templateUrl: './listagem-estoque.component.html',
  styleUrls: ['./listagem-estoque.component.scss']
})
export class ListagemEstoqueComponent {

  public mockData = [
    {nomeProduto: 'Refri', valorUnitario: 2.50, quantidadeEstoque: 30, validade: 5},
    {nomeProduto: 'Refri', valorUnitario: 2.50, quantidadeEstoque: 30, validade: 5},
    {nomeProduto: 'Refri', valorUnitario: 2.50, quantidadeEstoque: 30, validade: 5},
    {nomeProduto: 'Refri', valorUnitario: 2.50, quantidadeEstoque: 30, validade: 5},
    {nomeProduto: 'Refri', valorUnitario: 2.50, quantidadeEstoque: 30, validade: 5},
    {nomeProduto: 'Refri', valorUnitario: 2.50, quantidadeEstoque: 30, validade: 5},
  ]

  constructor(private _router: Router) { }

  public handleClick(id: number) {
    console.log(id);
  }

  handleCadastroClick(){
    this._router.navigate(['/cadastro-produto']);
  }
}
