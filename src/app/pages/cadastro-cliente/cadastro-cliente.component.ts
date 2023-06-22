import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {FullComponent} from "../../layout/full/full.component";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FullComponent, InputTextModule, ButtonModule, DropdownModule],
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent {

  public tipoPessoaOpcoes = [
    {opcao: 'Pessoa Física', valor: 'pessoaFisica'},
    {opcao: 'Pessoa Jurídica', valor: 'pessoaJuridica'},
  ]

  public formulario = new FormGroup({
    nome: new FormControl<undefined | any>(undefined, Validators.required),
    fantasia: new FormControl<undefined | any>(undefined),
    tipoPessoa: new FormControl<undefined | any>("Pessoa Física", Validators.required),
    cnpj: new FormControl<undefined| number>(undefined),
    cpf: new FormControl<undefined | number>(undefined),
    inscricaoEstadual: new FormControl<undefined| number>(undefined),
    //Endereço
    rua: new FormControl<undefined | string>(undefined, Validators.required),
    cep: new FormControl<undefined | string>(undefined, Validators.required),
    cidade: new FormControl<undefined | string>(undefined, Validators.required),
    bairro: new FormControl<undefined | string>(undefined, Validators.required),
    numero: new FormControl<undefined | number>(undefined, Validators.required),
    complemento: new FormControl<undefined | string>(undefined, Validators.required),

//     Informações Contato
    informacoesContato: new FormControl<undefined | string>(undefined),
    telefone: new FormControl<undefined | number>(undefined),
    celular: new FormControl<undefined | number>(undefined),
    email: new FormControl<undefined | number>(undefined, [Validators.email])
  })

  public handleClick(){
    console.log(this.formulario.value);
  }

}
