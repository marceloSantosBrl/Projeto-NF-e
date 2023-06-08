import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarVendaComponent } from './cadastrar-venda.component';

describe('CadastrarVendaComponent', () => {
  let component: CadastrarVendaComponent;
  let fixture: ComponentFixture<CadastrarVendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CadastrarVendaComponent]
    });
    fixture = TestBed.createComponent(CadastrarVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
