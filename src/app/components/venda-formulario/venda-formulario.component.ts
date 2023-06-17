import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {ValidationInteractivity} from "../../classes/ValidationInteractivity";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'app-venda-formulario',
  standalone: true,
  imports: [CommonModule, InputTextModule, CalendarModule, ReactiveFormsModule, ButtonModule, RippleModule],
  templateUrl: './venda-formulario.component.html',
  styleUrls: ['./venda-formulario.component.scss']
})
export class VendaFormularioComponent {

  @Output('submit') public submit = new EventEmitter<any>();

  public validacao = ValidationInteractivity.getWarningVisibility;

  public formulario = new FormGroup({
    cliente: new FormControl<string | undefined>(undefined),
    dataDeVenda: new FormControl<Date| undefined>(new Date(), Validators.required),
    categoriaFinanceira: new FormControl<string| undefined>(undefined),
    vendedor: new FormControl<string| undefined>(undefined),
    frete: new FormControl<number| undefined>(0),
    natureza: new FormControl<string| undefined>(undefined),
    formaPagamento: new FormControl<string| undefined>(undefined, Validators.required),
    numeroParcelas: new FormControl<number| undefined>(undefined),
  })


  public clickHandler(){
    if (this.formulario.valid) {
      this.submit.emit(this.formulario.value);
    }
  }
}
