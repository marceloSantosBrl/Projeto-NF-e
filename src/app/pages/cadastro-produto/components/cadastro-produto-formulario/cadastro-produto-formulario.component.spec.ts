import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProdutoFormularioComponent } from './cadastro-produto-formulario.component';

describe('CadastroProdutoFormularioComponent', () => {
  let component: CadastroProdutoFormularioComponent;
  let fixture: ComponentFixture<CadastroProdutoFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CadastroProdutoFormularioComponent]
    });
    fixture = TestBed.createComponent(CadastroProdutoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
