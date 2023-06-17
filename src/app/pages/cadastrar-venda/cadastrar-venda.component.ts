import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendaFormularioComponent } from "../../components/venda-formulario/venda-formulario.component";
import { VendaCarrinhoComponent } from "../../components/venda-carrinho/venda-carrinho.component";
import { FullComponent } from "../../layout/full/full.component";

@Component({
    selector: 'app-cadastrar-venda',
    standalone: true,
    templateUrl: './cadastrar-venda.component.html',
    styleUrls: ['./cadastrar-venda.component.scss'],
    imports: [CommonModule, VendaFormularioComponent, VendaCarrinhoComponent, FullComponent]
})
export class CadastrarVendaComponent {

}
