import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('src/app/pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'estoque-vendas',
    loadComponent: () =>
      import(
        'src/app/pages/inventory-reversals/inventory-reversals.component'
      ).then((m) => m.InventoryReversalsComponent),
  },
  {
    path: 'estoque-total',
    loadComponent: () =>
      import('src/app/pages/inventory-total/inventory-total.component').then(
        (m) => m.InventoryTotalComponent
      ),
  },
  {
    path: 'estoque-estornos',
    loadComponent: () =>
      import(
        'src/app/pages/inventory-reversals/inventory-reversals.component'
      ).then((m) => m.InventoryReversalsComponent),
  },
  {
    path: 'cadastro-produto',
    loadComponent: () =>
      import('src/app/pages/cadastro-produto/cadastro-produto.component').then(
        (m) => m.CadastroProdutoComponent
      ),
  },
  {
    path: 'cadastro-venda',
    loadComponent: () =>
      import('src/app/pages/cadastrar-venda/cadastrar-venda.component').then(
        (m) => m.CadastrarVendaComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
