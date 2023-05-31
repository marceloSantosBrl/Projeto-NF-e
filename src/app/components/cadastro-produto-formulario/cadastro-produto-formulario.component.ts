import {Component, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {IProdutoDto} from "../../models/i-produto-dto";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {InputTextareaModule} from "primeng/inputtextarea";
import { AccordionModule } from 'primeng/accordion';
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'app-cadastro-produto-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextModule, DropdownModule,
    CalendarModule, InputTextareaModule, AccordionModule, RippleModule],
  templateUrl: './cadastro-produto-formulario.component.html',
  styleUrls: ['./cadastro-produto-formulario.component.scss']
})
export class CadastroProdutoFormularioComponent {

  public Tipo = [
    {tipo: 'Produto', nome: 'produto'},
    {tipo: 'Serviço', nome: 'servico'}
  ]

  public unidades = [
    {item: 'UN', valor: 'un'},
    {item: 'KG', valor: 'kg'},
    {item: 'LT', valor: 'lt'},
    {item: 'MT', valor: 'mt'},
    {item: 'M2', valor: 'm2'},
    {item: 'M3', valor: 'm3'},
    {item: 'PR', valor: 'pr'},
    {item: 'KW', valor: 'kw'}
  ]

  public producao = [
    {item: 'Própria', valor: 'propria'},
    {item: 'Terceiros', valor: 'terceiros'}
  ]


  public unidadeTamanho = [
    {item: 'Metro', valor: 'mt'},
    {item: 'Centímetro', valor: 'cm'},
    {item: 'Milímetro', valor: 'mm'}
  ]


  public sendEvent = new EventEmitter<Partial<IProdutoDto>>();

  handleSubmit() {
    if (this.form.valid) {
      this.sendEvent.emit(this.form.value);
    }
  }


  public form = this._fb.group({
      nome: ['', Validators.required],
      tipo: ['produto', Validators.required],
      precoDeVenda: [Validators.required],
      marca: ['', Validators.required],
      unidade: ['un', Validators.required],
      producao: ['propria', Validators.required],
      itensPorCaixa: [Validators.required],
      dataDeValidade: [new Date(), Validators.required],
      gtin : ['', Validators.required],
      gtinTributario: ['', Validators.required],
      descricao: ['', Validators.required],
      //
      estoqueMinimo: [Validators.required],
      estoqueMaximo: [Validators.required],
      diasCrossdocking: [Validators.required],
      //
      pesoLiquido: [Validators.required],
      pesoBruto: [Validators.required],
      largura: [Validators.required],
      comprimento: [Validators.required],
      altura: [Validators.required],
      unidadeTamanho: ['', Validators.required],
      //
      origem: ['', Validators.required],
      ncm: ['', Validators.required],
      cest: ['', Validators.required],
      tipoItem: ['', Validators.required],
      aliquotaTributo: [Validators.required],
      icmsBaseRetencao: [Validators.required],
      icmsStBaseRetencao: [Validators.required],
      icmsProprio: [Validators.required],
      pisFixo: [Validators.required],
      cofinsFixo: [Validators.required],
    }
  )

  constructor(
    private _fb: NonNullableFormBuilder,
  ) {
  }
}
