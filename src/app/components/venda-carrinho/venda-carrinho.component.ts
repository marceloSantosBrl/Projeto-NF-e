import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { TableModule } from 'primeng/table';

interface visor {
  nomeProduto: string;
  valorUnitario: number;
  quantidade: number;
  total: number
}

@Component({
  selector: 'app-venda-carrinho',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TableModule],
  templateUrl: './venda-carrinho.component.html',
  styleUrls: ['./venda-carrinho.component.scss']
})
export class VendaCarrinhoComponent {

  @Output('clickVisor') public clickVisor = new EventEmitter<visor[]>();

  public visorConcreto: visor[] = [
    {nomeProduto: "Dumb", valorUnitario: 12.8, quantidade: 8, total: 20},
    {nomeProduto: "Dumb", valorUnitario: 12.8, quantidade: 8, total: 20},
    {nomeProduto: "Dumb", valorUnitario: 12.8, quantidade: 8, total: 20},
    {nomeProduto: "Dumb", valorUnitario: 12.8, quantidade: 8, total: 20},
    {nomeProduto: "Dumb", valorUnitario: 12.8, quantidade: 8, total: 20},
    {nomeProduto: "Dumb", valorUnitario: 12.8, quantidade: 8, total: 20},
  ];

  public formulario = new FormGroup(
    {
      nomeProduto: new FormControl<string | undefined>(undefined,
        [Validators.required]),
      valorUnitario: new FormControl<number | undefined>(undefined,
        [Validators.required]),
      quantidade: new FormControl<number | undefined>(undefined,
        [Validators.required]),
    }
  )

  public clickHandler(): void {
    if (this.formulario.valid) {
      const valoresControles = this.formulario.value;
      this.visorConcreto.push(
        {
          nomeProduto: valoresControles.nomeProduto!,
          valorUnitario: valoresControles.valorUnitario!,
          quantidade: valoresControles.quantidade!,
          total: valoresControles.valorUnitario! * valoresControles.quantidade!
        }
      )
      this.clickVisor.emit(this.visorConcreto);
    }
  }

}
