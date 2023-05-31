import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullComponent} from "../../layout/full/full.component";
import {
  CadastroProdutoFormularioComponent
} from "../../components/cadastro-produto-formulario/cadastro-produto-formulario.component";

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [CommonModule, FullComponent, CadastroProdutoFormularioComponent],
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent {

}
