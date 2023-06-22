import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';
import { RippleModule } from 'primeng/ripple';
import { ValidationInteractivity } from '../../classes/ValidationInteractivity';
import { biggerThanZero } from 'src/app/functions/CustomValidators';
import { IDropdownElement } from 'src/app/models/idropdown-element';

@Component({
  selector: 'app-cadastro-produto-formulario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    AccordionModule,
    RippleModule,
  ],
  templateUrl: './cadastro-produto-formulario.component.html',
  styleUrls: ['./cadastro-produto-formulario.component.scss'],
})
export class CadastroProdutoFormularioComponent {
  public validation = ValidationInteractivity.getWarningVisibility;

  public Tipo = [
    { item: 'Produto', valor: 'produto' },
    { item: 'Serviço', valor: 'servico' },
  ];

  public unidades = [
    { item: 'UN', valor: 'un' },
    { item: 'KG', valor: 'kg' },
    { item: 'LT', valor: 'lt' },
    { item: 'MT', valor: 'mt' },
    { item: 'M2', valor: 'm2' },
    { item: 'M3', valor: 'm3' },
    { item: 'PR', valor: 'pr' },
    { item: 'KW', valor: 'kw' },
  ];

  public producao = [
    { item: 'Própria', valor: 'propria' },
    { item: 'Terceiros', valor: 'terceiros' },
  ];

  public unidadeTamanho = [
    { item: 'Metro', valor: 'mt' },
    { item: 'Centímetro', valor: 'cm' },
    { item: 'Milímetro', valor: 'mm' },
  ];

  public sendEvent = new EventEmitter<any>();

  handleSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.sendEvent.emit(this.form.value);
    }
  }

  public form = new FormGroup({
    nome: new FormControl('',
    Validators.required),
    tipo: new FormControl<IDropdownElement | undefined>({
      item: 'Produto',
      valor: 'produto',
    }),
    precoDeVenda: new FormControl<number | undefined>(
      undefined,
      biggerThanZero()
    ),
    marca: new FormControl(''),
    unidade: new FormControl<IDropdownElement | undefined>({
      item: 'UN',
      valor: 'un',
    }),
    producao: new FormControl<IDropdownElement | undefined>({
      item: 'Terceiros',
      valor: 'terceiros',
    }),
    itensPorCaixa: new FormControl<number | undefined>(undefined),
    dataDeValidade: new FormControl<Date | undefined>(undefined),
    gtin: new FormControl(''),
    gtinTributario: new FormControl(''),
    descricao: new FormControl(''),
    //
    estoqueMinimo: new FormControl<number | undefined>(undefined),
    estoqueMaximo: new FormControl<number | undefined>(undefined),
    diasCrossdocking: new FormControl<number | undefined>(undefined),
    //
    pesoLiquido: new FormControl<number | undefined>(undefined),
    pesoBruto: new FormControl<number | undefined>(undefined),
    largura: new FormControl<number | undefined>(undefined),
    comprimento: new FormControl<number | undefined>(undefined),
    altura: new FormControl<number | undefined>(undefined),
    unidadeTamanho: new FormControl<IDropdownElement | undefined>({
      item: 'Centímetro',
      valor: 'cm',
    }),
    //
    origem: new FormControl<string | undefined>(''),
    ncm: new FormControl<string | undefined>(''),
    cest: new FormControl<string | undefined>(''),
    tipoItem: new FormControl<string | undefined>(''),
    aliquotaTributo: new FormControl<number | undefined>(undefined),
    icmsBaseRetencao: new FormControl<number | undefined>(undefined),
    icmsStBaseRetencao: new FormControl<number | undefined>(undefined),
    icmsProprio: new FormControl<number | undefined>(undefined),
    pisFixo: new FormControl<number | undefined>(undefined),
    cofinsFixo: new FormControl<number | undefined>(undefined),
  });
}
