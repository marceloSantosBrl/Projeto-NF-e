import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FullComponent } from 'src/app/layout/full/full.component';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-cliente',
  standalone: true,
  imports: [CommonModule, TableModule, FullComponent, ButtonModule],
  templateUrl: './listagem-cliente.component.html',
  styleUrls: ['./listagem-cliente.component.scss']
})
export class ListagemClienteComponent {

  public mockData = [
    {nome: 'Marcelo', tipoCliente: 'Pessoa Física', cidade: 'Senhor do Bonfim', 
    dataDeCadastro: new Date(), situacao:'Inadimplente'},
    {nome: 'Marcelo', tipoCliente: 'Pessoa Física', cidade: 'Senhor do Bonfim', 
    dataDeCadastro: new Date(), situacao:'Inadimplente'},
    {nome: 'Marcelo', tipoCliente: 'Pessoa Física', cidade: 'Senhor do Bonfim', 
    dataDeCadastro: new Date(), situacao:'Inadimplente'},
    {nome: 'Marcelo', tipoCliente: 'Pessoa Física', cidade: 'Senhor do Bonfim', 
    dataDeCadastro: new Date(), situacao:'Inadimplente'}  
  ];

  constructor(private _router: Router) {}

  public handleClick(id: number) {
    console.log(id);
  }
  
  handleCadastroClick(){
    this._router.navigate(['/cadastro-cliente']);
  }

}
