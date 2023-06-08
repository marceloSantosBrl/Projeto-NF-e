import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendaFormularioComponent } from "../../components/venda-formulario/venda-formulario.component";

@Component({
    selector: 'app-cadastrar-venda',
    standalone: true,
    templateUrl: './cadastrar-venda.component.html',
    styleUrls: ['./cadastrar-venda.component.scss'],
    imports: [CommonModule, VendaFormularioComponent]
})
export class CadastrarVendaComponent {

}
