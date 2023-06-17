import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { getID, removeID } from 'src/app/classes/GenerateId';
import { ValidationInteractivity } from 'src/app/classes/ValidationInteractivity';
import {RippleModule} from "primeng/ripple";

interface visor {
  id:number;
  nomeProduto: string;
  valorUnitario: number;
  quantidade: number;
  desconto: number;
  total: number;
}

@Component({
  selector: 'app-venda-carrinho',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
  ],
  templateUrl: './venda-carrinho.component.html',
  styleUrls: ['./venda-carrinho.component.scss'],
})
export class VendaCarrinhoComponent {
  @Output('clickVisor') public clickVisor = new EventEmitter<visor[]>();

  public warningVisibility = ValidationInteractivity.getWarningVisibility;

  public visorConcreto: visor[] = [
    {
      id: 1,
      nomeProduto: 'Dumb',
      valorUnitario: 12.8,
      quantidade: 8,
      desconto: 5,
      total: 20,
    },
    {
      id: 2,
      nomeProduto: 'Dumb',
      valorUnitario: 12.8,
      quantidade: 8,
      desconto: 5,
      total: 20,
    },
    {
      id: 3,
      nomeProduto: 'Dumb',
      valorUnitario: 12.8,
      quantidade: 8,
      desconto: 5,
      total: 20,
    },
    {
      id: 4,
      nomeProduto: 'Dumb',
      valorUnitario: 12.8,
      quantidade: 8,
      desconto: 5,
      total: 20,
    },
    {
      id: 5,
      nomeProduto: 'Dumb',
      valorUnitario: 12.8,
      quantidade: 8,
      desconto: 5,
      total: 20,
    },
  ];

  public formulario = new FormGroup({
    nomeProduto: new FormControl<string | undefined>(undefined, [
      Validators.required,
    ]),
    valorUnitario: new FormControl<number | undefined>(undefined, [
      Validators.required,
    ]),
    desconto: new FormControl<number>(
      0
    ),
    quantidade: new FormControl<number | undefined>(undefined, [
      Validators.required,
    ]),
  });

  public clickHandler(): void {
    if (this.formulario.valid) {
      const valoresControles = this.formulario.value;
      this.visorConcreto.push({
        id: getID(this.visorConcreto),
        nomeProduto: valoresControles.nomeProduto!,
        valorUnitario: valoresControles.valorUnitario!,
        quantidade: valoresControles.quantidade!,
        desconto: valoresControles.desconto!,
        total:
          valoresControles.valorUnitario! * valoresControles.quantidade! -
          valoresControles.desconto!,
      });
      this.clickVisor.emit(this.visorConcreto);
    }
  }

  public handleClick(id: number): void {
    this.visorConcreto = removeID(this.visorConcreto, id);
    this.clickVisor.emit(this.visorConcreto);
  }
}
